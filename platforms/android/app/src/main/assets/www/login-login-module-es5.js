(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-header>\n    <ion-toolbar color=\"light\">\n      <ion-title></ion-title>\n      <ion-buttons slot=\"end\">\n        <ion-select (ionChange)=\"changeLang()\" [(ngModel)]=\"lang\">\n          <ion-select-option *ngFor=\"let lang of langArr\" value=\"{{lang.code}}\">{{lang.name}}</ion-select-option>\n        </ion-select>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n</ion-header>\n<ion-content>\n  <div class=\"login-header\">\n    <img src=\"./assets/img/logo.png\" />\n    <!-- <h3>{{ 'APP_NAME' | translate }}</h3>\n    <p>{{ 'APP_SUBTEXT' | translate }} </p> -->\n  </div>\n  <div class=\"ion-padding\">\n    <ion-list lines=\"none\">\n      <ion-item>\n        <ion-label position=\"stacked\">{{'EMAIL_ADDRESS' | translate }}</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"email\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">{{'PASSWORD' | translate }}</ion-label>\n        <ion-input type=\"password\" [(ngModel)]=\"password\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-button color=\"dark\" slot=\"end\" fill=\"clear\" routerLink=\"/forget\">\n          {{'FORGOT' | translate }}\n        </ion-button>\n      </ion-item>\n    </ion-list>\n    <div style=\"padding:0px 16px\">\n      <ion-button color=\"dark\" expand=\"block\" (click)=\"login()\">{{'LOGIN' | translate }}</ion-button>\n      &nbsp;&nbsp;\n      <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" routerLink=\"/register\">\n        {{'SIGN_UP_TEXT' | translate }}\n      </ion-button>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".forget {\n  text-align: right;\n  padding: 4px;\n}\n\n.padding {\n  padding: 0px 16px;\n}\n\nion-select {\n  background: transparent !important;\n  margin: auto !important;\n  border: none !important;\n}\n\n.header-md:after {\n  background-image: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRDpcXEtVR0lIQU4gRVhQUkVTU1xcU1lTVEVNIDIwMjBcXEt1Z2loYW4gRXhwcmVzc1xcS3VnaWhhbiBFeHByZXNzXFxrdWdpaGFuLWV4cHJlc3NcXHJpZGVyL3NyY1xcYXBwXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7QUNDRjs7QURFQTtFQUNFLGlDQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9yZ2V0e1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZzogNHB4O1xufVxuXG4ucGFkZGluZ3tcbiAgcGFkZGluZzogMHB4IDE2cHg7XG59XG5cbmlvbi1zZWxlY3R7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogYXV0byAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmhlYWRlci1tZDphZnRlcntcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZSAhaW1wb3J0YW50O1xufSIsIi5mb3JnZXQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZzogNHB4O1xufVxuXG4ucGFkZGluZyB7XG4gIHBhZGRpbmc6IDBweCAxNnB4O1xufVxuXG5pb24tc2VsZWN0IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyLW1kOmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");








var LoginPage = /** @class */ (function () {
    function LoginPage(authService, translate, commonService, router, menuCtrl) {
        this.authService = authService;
        this.translate = translate;
        this.commonService = commonService;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.langArr = [];
        this.lang = 'en';
        this.email = "";
        this.password = "";
        this.isRegisterEnabled = true;
        this.menuCtrl.enable(false);
        this.langArr = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__["environment"].langArr;
        this.lang = this.commonService.getLang();
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.changeLang = function () {
        this.commonService.changeLang(this.lang);
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        var email = (this.email).toLowerCase().trim();
        if (email.length == 0 || this.password.length == 0) {
            this.commonService.showAlert("Invalid Credentials");
        }
        else {
            this.commonService.showLoader();
            this.authService.login(email, this.password).then(function (authData) {
                _this.commonService.hideLoader();
                localStorage.setItem('isLoggedIn', 'true');
                _this.router.navigateByUrl('/home', { skipLocationChange: true, replaceUrl: true });
            }, function (error) {
                _this.commonService.hideLoader();
                _this.commonService.showToast(error.message);
            });
        }
    };
    LoginPage.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"] }
    ]; };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module-es5.js.map