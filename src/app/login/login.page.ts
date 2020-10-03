import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../services/auth.service';
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { MenuController } from '@ionic/angular';

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

}
