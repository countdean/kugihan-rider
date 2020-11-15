import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../services/auth.service';
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { MenuController } from '@ionic/angular';
import { Facebook } from '@ionic-native/facebook/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  langArr = [];
  lang = 'en';
  email: string = "";
  password: string = "";
  isRegisterEnabled: any = true;


  constructor(
    private authService: AuthService,
    private translate: TranslateService,
    private commonService: CommonService,
    private router: Router,
    private menuCtrl: MenuController,
    public facebook: Facebook,
    private googlePlus: GooglePlus

  ) {
    this.menuCtrl.enable(false);
    this.langArr = environment.langArr;
    this.lang = this.commonService.getLang();
  }

  ngOnInit() {
  }

  changeLang() {
    this.commonService.changeLang(this.lang);
  }

  login() {
    let email = (this.email).toLowerCase().trim();

    if (email.length == 0 || this.password.length == 0) {
      this.commonService.showAlert("Invalid Credentials");
    }
    else {

      this.commonService.showLoader();

      this.authService.login(email, this.password).then(authData => {

        this.commonService.hideLoader();
        localStorage.setItem('isLoggedIn', 'true');
        this.router.navigateByUrl('/home', { skipLocationChange: true, replaceUrl: true });
      }, error => {
        this.commonService.hideLoader();
        this.commonService.showToast(error.message);
      });
    }

  }

  facebookLogin(): Promise<any> {
    this.commonService.showLoader();
    return this.facebook.login(['email'])
    .then( response => {
      const facebookCredential = auth.FacebookAuthProvider
        .credential(response.authResponse.accessToken);
      auth().signInWithCredential(facebookCredential)
        .then( success => {
          //console.log("Firebase success: " + JSON.stringify(success));
          this.authService.loginFbRegister(success);
          localStorage.setItem('isLoggedIn', 'true');
          this.router.navigateByUrl('/home', { skipLocationChange: true, replaceUrl: true });
        }).catch((error) => {
          console.log(error);
          this.commonService.hideLoader();
          if(error.code === 'auth/account-exists-with-different-credential') {
            this.commonService.showToast('Your email is already bind to an existing account for this app.');
          } else {
            this.commonService.showToast(`Error ${error}`);
          }
        });

    }).catch((error) => {
      this.commonService.hideLoader();
      console.log(error); 
      this.commonService.showToast(error);
    });
  }

  googleLogin() {
    this.commonService.showLoader();
    this.googlePlus.login({ 'webClientId': '500907002253-tloch3u45o16bhq2cd99pfvau928mitv.apps.googleusercontent.com', 'clientId': 'ph.kugihan.rider'})
    .then((response) => {
      //console.log(response);
      const googleCredentials = auth.GoogleAuthProvider.credential(response.idToken);
      auth().signInWithCredential(googleCredentials)
      .then( success => {
        console.log("Firebase success: " + JSON.stringify(success));
        this.authService.loginFbRegister(success);
        localStorage.setItem('isLoggedIn', 'true');
        this.router.navigateByUrl('/home');
      }).catch((error) => {
        console.log(error);
        this.commonService.hideLoader();
        if(error.code === 'auth/account-exists-with-different-credential') {
          this.commonService.showToast('Your email is already bind to an existing account for this app.');
        } else {
          this.commonService.showToast(`Error ${error}`);
        }
      });
    }).catch((error) => {
      this.commonService.hideLoader();
      console.log(error);
      this.commonService.showToast(error);
    });
  }

}
