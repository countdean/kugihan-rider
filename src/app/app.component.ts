import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateService } from '@ngx-translate/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { TripService } from './services/trip.service';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'HOME',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'MY_RIDES',
      url: '/history',
      icon: 'time'
    },
    {
      title: 'PAYMENTS',
      url: '/payments',
      icon: 'card'
    },
    {
      title: 'NOTIFICATIONS',
      url: '/notifications',
      icon: 'notifications'
    },
    {
      title: 'SETTINGS',
      url: '/settings',
      icon: 'settings'
    },

  ];
  user: any = {};

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateService,
    private afAuth: AngularFireAuth,
    private authService: AuthService,
    private router: Router,
    private tripService: TripService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.splashScreen.hide();

      if (this.platform.is("android")) this.statusBar.styleLightContent();
      else this.statusBar.styleDefault();


      this.translate.setDefaultLang('en');

      let lang = localStorage.getItem('lang')
      //console.log(lang);
      if (lang == null || lang == undefined)
        this.translate.use('en');
      else
        this.translate.use(lang);

      //if (localStorage.getItem('isLoggedIn') === 'true') {

      this.router.navigateByUrl('/home', { skipLocationChange: true, replaceUrl: true });

      this.afAuth.authState.pipe(take(1)).subscribe(authData => {
        if (authData) {
          console.log('auth: ' + authData);
          this.authService.getUser(authData.uid).valueChanges().subscribe(user => {
            console.log(user);
            this.user = user
          });

          this.tripService.getTrips().valueChanges().subscribe((trips: any) => {
            trips.forEach(trip => {
              if (trip.status === 'waiting' || trip.status === 'accepted' || trip.status === 'going') {
                this.tripService.setId(trip.key)
                this.router.navigateByUrl('/tracking');
              }
              else if (trip.status === 'finished') {
                this.router.navigateByUrl('/home', { skipLocationChange: true, replaceUrl: true });
              }
            })
          })
          this.router.navigateByUrl('/home', { skipLocationChange: true, replaceUrl: true });
        } else {
          this.router.navigateByUrl('/login', { skipLocationChange: true, replaceUrl: true });
        }
      });
      //}
      // else {
      //   this.router.navigateByUrl('/login', { skipLocationChange: true, replaceUrl: true });
      // }
    });
  }

  // logout() {
  //   //console.log('logout triggered');
  //   this.afAuth.auth.signOut();
  //   //console.log(this.afAuth.user);
  //   localStorage.setItem('isLoggedIn', 'false');
  //   this.router.navigateByUrl('/login', { skipLocationChange: true, replaceUrl: true });
  // }
}
