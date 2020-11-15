(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payments-payments-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/payments/payments.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/payments/payments.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"dark\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>{{'PAYMENTS' | translate}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-item lines=\"none\">\r\n          <ion-label position=\"stacked\">{{'CARD_NUMBER' | translate}}</ion-label>\r\n          <ion-input type=\"text\" [(ngModel)]=\"number\" size=\"20\"></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"8\">\r\n        <ion-item lines=\"none\">\r\n          <ion-label position=\"stacked\">{{'EXPIRE_DATE' | translate}} (MM/YY)</ion-label>\r\n          <ion-input type=\"text\" [(ngModel)]=\"exp\" size=\"5\"></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"4\">\r\n        <ion-item lines=\"none\">\r\n          <ion-label position=\"stacked\">{{'CVV' | translate}}</ion-label>\r\n          <ion-input type=\"password\" [(ngModel)]=\"cvv\" size=\"4\"></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <div class=\"ion-padding\">\r\n    <ion-button expand=\"block\" color=\"dark\" (click)=\"saveCard()\">{{'SAVE' | translate}}</ion-button>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/payments/payments.module.ts":
/*!*********************************************!*\
  !*** ./src/app/payments/payments.module.ts ***!
  \*********************************************/
/*! exports provided: PaymentsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsPageModule", function() { return PaymentsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _payments_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payments.page */ "./src/app/payments/payments.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








const routes = [
    {
        path: '',
        component: _payments_page__WEBPACK_IMPORTED_MODULE_6__["PaymentsPage"]
    }
];
let PaymentsPageModule = class PaymentsPageModule {
};
PaymentsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_payments_page__WEBPACK_IMPORTED_MODULE_6__["PaymentsPage"]]
    })
], PaymentsPageModule);



/***/ }),

/***/ "./src/app/payments/payments.page.scss":
/*!*********************************************!*\
  !*** ./src/app/payments/payments.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BheW1lbnRzL3BheW1lbnRzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/payments/payments.page.ts":
/*!*******************************************!*\
  !*** ./src/app/payments/payments.page.ts ***!
  \*******************************************/
/*! exports provided: PaymentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsPage", function() { return PaymentsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");






let PaymentsPage = class PaymentsPage {
    constructor(translate, authService, common) {
        this.translate = translate;
        this.authService = authService;
        this.common = common;
    }
    ngOnInit() {
        this.authService.getCardSetting().valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe((snapshot) => {
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
        }, (status, response) => {
            this.common.hideLoader();
            // success
            if (status == 200) {
                this.authService.updateCardSetting(this.number, this.exp, this.cvv, response.id);
                this.common.showToast("Card Updated");
            }
            else {
                this.common.showToast(response.error.message);
            }
        });
    }
};
PaymentsPage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] }
];
PaymentsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payments',
        template: __webpack_require__(/*! raw-loader!./payments.page.html */ "./node_modules/raw-loader/index.js!./src/app/payments/payments.page.html"),
        styles: [__webpack_require__(/*! ./payments.page.scss */ "./src/app/payments/payments.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]])
], PaymentsPage);



/***/ })

}]);
//# sourceMappingURL=payments-payments-module-es2015.js.map