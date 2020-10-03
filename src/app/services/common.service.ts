import { Injectable } from '@angular/core';
import { ToastController, LoadingController, AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  loader = null;
  constructor(private toastCtrl: ToastController,
    private loadCtrl: LoadingController,
    private alertCtrl: AlertController,
    private translate: TranslateService
  ) { }

  showToast(message) {
    this.toastCtrl.create({ message: message, duration: 3000 }).then(res => res.present());
  }

  showAlert(message) {
    this.alertCtrl.create({
      message: message,
      buttons: ['ok']
    }).then(res => res.present());
  }

  showLoader() {
    if (this.loader == null) {
      this.loadCtrl.create({ spinner: 'circles', duration: 5000 }).then(res => {
        this.loader = res;
        this.loader.present();
      });
    }

  }

  hideLoader() {
    if (this.loader != null) {
      this.loader.dismiss();
      this.loader = null
    }
  }

  changeLang(lang) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }

  getLang() {
    let lang = localStorage.getItem('lang');
    if (lang == null || lang == undefined)
      return 'en';

    else
      return lang;
  }
}
