import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CommonService } from '../services/common.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  email: string = "";
  password: string = "";
  name: string = "";
  phoneNumber: string = ""
  constructor(
    private router: Router,
    private authService: AuthService,
    private commonService: CommonService,
    private translate: TranslateService,
    private menuCtrl: MenuController
  ) {
    this.menuCtrl.enable(false);
  }
  ngOnInit() {
  }
  signup() {
    if (this.email.length == 0 || this.password.length == 0 || this.name.length == 0 || this.phoneNumber.length == 0) {
      this.commonService.showToast("Invalid Credentials");
    }
    else {
      this.commonService.showLoader();
      let email = (this.email).toLowerCase().trim();
      this.authService.register(email, this.password, this.name, this.phoneNumber).subscribe(authData => {
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
