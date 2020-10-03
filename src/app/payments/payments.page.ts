import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../services/auth.service';
import { take } from 'rxjs/operators';
import { CommonService } from '../services/common.service';


declare var Stripe: any;


@Component({
  selector: 'app-payments',
  templateUrl: './payments.page.html',
  styleUrls: ['./payments.page.scss'],
})

export class PaymentsPage implements OnInit {

  number: any;
  exp: any;
  cvv: any;

  constructor(
    private translate: TranslateService,
    private authService: AuthService,
    private common: CommonService
  ) { }

  ngOnInit() {
    this.authService.getCardSetting().valueChanges().pipe(take(1)).subscribe((snapshot: any) => {
      if (snapshot != null) {
        this.number = snapshot.number;
        this.exp = snapshot.exp;
        this.cvv = snapshot.cvv;
      }
    });
  }


  saveCard() {
    const exp = this.exp.split('/');
    this.common.showLoader();

    Stripe.card.createToken({
      number: (this.number).replace(/\s/g, ''),
      exp_month: exp[0],
      exp_year: exp[1],
      cvc: this.cvv
    }, (status: number, response: any) => {
      this.common.hideLoader()
      // success
      if (status == 200) {
        this.authService.updateCardSetting(this.number, this.exp, this.cvv, response.id);
        this.common.showToast("Card Updated");
      } else {
        this.common.showToast(response.error.message);
      }
    });
  }

}
