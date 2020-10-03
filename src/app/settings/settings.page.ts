import { Component, OnInit } from '@angular/core';
import { environment, ENABLE_SIGNUP } from 'src/environments/environment.prod';
import { CommonService } from '../services/common.service';
import { AuthService } from '../services/auth.service';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})

export class SettingsPage implements OnInit {
  langArr = [];
  lang = 'en';
  user: any = {};

  constructor(
    private commonService: CommonService,
    private authService: AuthService,
    private db: AngularFireDatabase,
    private fcm: FirebaseX
  ) {
    this.langArr = environment.langArr;
    this.lang = this.commonService.getLang();
  }

  ngOnInit() {
    this.authService.getUser(this.authService.getUserData().uid).valueChanges().subscribe(user =>
      this.user = user
    )
  }

  changeLang() {
    this.commonService.changeLang(this.lang);
  }

  change() {
    console.log(this.user.isPushEnabled);
    if (this.user.isPushEnabled) {
      this.fcm.getToken().then(token => {
        this.authService.getUser(this.authService.getUserData().uid).update({ isPushEnabled: true, pushToken: token });
      }).catch(err => {
        console.log(err);
        this.authService.getUser(this.authService.getUserData().uid).update({ isPushEnabled: false, pushToken: null });
      });
    }
    else {
      this.authService.getUser(this.authService.getUserData().uid).update({ isPushEnabled: false, pushToken: null });
    }
  }

}
