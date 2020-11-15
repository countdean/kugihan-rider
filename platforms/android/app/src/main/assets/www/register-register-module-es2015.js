(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"light\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{'REGISTER' | translate}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"ion-padding\">\r\n  <div class=\"login-header\">\r\n    <img src=\"./assets/img/logo.png\" />\r\n    <!-- <h3>{{ 'APP_NAME' | translate }}</h3>\r\n    <p>{{ 'APP_SUBTEXT' | translate }} </p> -->\r\n  </div>\r\n  <ion-list lines=\"none\">\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">{{'FULLNAME' | translate }}</ion-label>\r\n      <ion-input type=\"text\" [(ngModel)]=\"name\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">{{'EMAIL_ADDRESS' | translate }}</ion-label>\r\n      <ion-input type=\"email\" [(ngModel)]=\"email\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">{{'PASSWORD' | translate }} (MIN 6 CHAR)</ion-label>\r\n      <ion-input type=\"password\" [(ngModel)]=\"password\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">{{'PHONE_NUMBER' | translate }}</ion-label>\r\n      <ion-input type=\"tel\" [(ngModel)]=\"phoneNumber\"></ion-input>\r\n    </ion-item>\r\n  </ion-list>\r\n  <div style=\"padding:0px 16px\">\r\n    <ion-button color=\"dark\" expand=\"block\" (click)=\"signup()\">\r\n      {{'REGISTER' | translate}}\r\n    </ion-button>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-md:after {\n  background-image: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvQzpcXFVzZXJzXFxFTUJFUlNQRUMgLSBMb3VcXERlc2t0b3BcXEt1Z2loYW5cXHJpZGVyL3NyY1xcYXBwXFxyZWdpc3RlclxccmVnaXN0ZXIucGFnZS5zY3NzIiwic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQ0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1tZDphZnRlcntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmUgIWltcG9ydGFudDtcclxufSIsIi5oZWFkZXItbWQ6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







let RegisterPage = class RegisterPage {
    constructor(router, authService, commonService, translate, menuCtrl) {
        this.router = router;
        this.authService = authService;
        this.commonService = commonService;
        this.translate = translate;
        this.menuCtrl = menuCtrl;
        this.email = "";
        this.password = "";
        this.name = "";
        this.phoneNumber = "";
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
};
RegisterPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"] }
];
RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.page.html"),
        styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"]])
], RegisterPage);



/***/ })

}]);
//# sourceMappingURL=register-register-module-es2015.js.map