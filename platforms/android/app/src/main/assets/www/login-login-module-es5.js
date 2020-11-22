(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-header>\r\n    <ion-toolbar color=\"light\">\r\n      <ion-title></ion-title>\r\n      <!--<ion-buttons slot=\"end\">\r\n        <ion-select (ionChange)=\"changeLang()\" [(ngModel)]=\"lang\">\r\n          <ion-select-option *ngFor=\"let lang of langArr\" value=\"{{lang.code}}\">{{lang.name}}</ion-select-option>\r\n        </ion-select>\r\n      </ion-buttons>-->\r\n    </ion-toolbar>\r\n  </ion-header>\r\n</ion-header>\r\n<ion-content>\r\n  <div class=\"login-header\">\r\n    <img src=\"./assets/img/logo.png\" />\r\n    <!-- <h3>{{ 'APP_NAME' | translate }}</h3>\r\n    <p>{{ 'APP_SUBTEXT' | translate }} </p> -->\r\n  </div>\r\n  <div class=\"ion-padding\">\r\n    <ion-list lines=\"none\">\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">{{'EMAIL_ADDRESS' | translate }}</ion-label>\r\n        <ion-input type=\"text\" [(ngModel)]=\"email\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">{{'PASSWORD' | translate }}</ion-label>\r\n        <ion-input type=\"password\" [(ngModel)]=\"password\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-button color=\"dark\" slot=\"end\" fill=\"clear\" routerLink=\"/forget\">\r\n          {{'FORGOT' | translate }}\r\n        </ion-button>\r\n      </ion-item>\r\n    </ion-list>\r\n    <div style=\"padding:0px 16px\">\r\n      <ion-button color=\"dark\" expand=\"block\" (click)=\"login()\">{{'LOGIN' | translate }}</ion-button>\r\n      <ion-button color=\"dark\" expand=\"block\" (click)=\"facebookLogin()\">FB LOGIN</ion-button>\r\n      <ion-button color=\"dark\" expand=\"block\" (click)=\"googleLogin()\">GOOGLE LOGIN</ion-button>\r\n      &nbsp;&nbsp;\r\n      <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" routerLink=\"/register\">\r\n        {{'SIGN_UP_TEXT' | translate }}\r\n      </ion-button>\r\n    </div>\r\n  </div>\r\n</ion-content>"

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

module.exports = ".forget {\n  text-align: right;\n  padding: 4px;\n}\n\n.padding {\n  padding: 0px 16px;\n}\n\nion-select {\n  background: transparent !important;\n  margin: auto !important;\n  border: none !important;\n}\n\n.header-md:after {\n  background-image: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxkZWFucVxcRGVza3RvcFxcS3VnaWhhbiBSaWRlci9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0NBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQ0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcmdldHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBwYWRkaW5nOiA0cHg7XHJcbn1cclxuXHJcbi5wYWRkaW5ne1xyXG4gIHBhZGRpbmc6IDBweCAxNnB4O1xyXG59XHJcblxyXG5pb24tc2VsZWN0e1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5oZWFkZXItbWQ6YWZ0ZXJ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZSAhaW1wb3J0YW50O1xyXG59IiwiLmZvcmdldCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nOiA0cHg7XG59XG5cbi5wYWRkaW5nIHtcbiAgcGFkZGluZzogMHB4IDE2cHg7XG59XG5cbmlvbi1zZWxlY3Qge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBtYXJnaW46IGF1dG8gIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXItbWQ6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lICFpbXBvcnRhbnQ7XG59Il19 */"

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
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/ngx/index.js");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "./node_modules/@ionic-native/google-plus/ngx/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_10__);











var LoginPage = /** @class */ (function () {
    function LoginPage(authService, translate, commonService, router, menuCtrl, facebook, googlePlus) {
        this.authService = authService;
        this.translate = translate;
        this.commonService = commonService;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.facebook = facebook;
        this.googlePlus = googlePlus;
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
    LoginPage.prototype.facebookLogin = function () {
        var _this = this;
        this.commonService.showLoader();
        return this.facebook.login(['email'])
            .then(function (response) {
            var facebookCredential = firebase_app__WEBPACK_IMPORTED_MODULE_10__["auth"].FacebookAuthProvider
                .credential(response.authResponse.accessToken);
            Object(firebase_app__WEBPACK_IMPORTED_MODULE_10__["auth"])().signInWithCredential(facebookCredential)
                .then(function (success) {
                //console.log("Firebase success: " + JSON.stringify(success));
                _this.authService.loginFbRegister(success);
                localStorage.setItem('isLoggedIn', 'true');
                _this.router.navigateByUrl('/home', { skipLocationChange: true, replaceUrl: true });
            }).catch(function (error) {
                console.log(error);
                _this.commonService.hideLoader();
                if (error.code === 'auth/account-exists-with-different-credential') {
                    _this.commonService.showToast('Your email is already bind to an existing account for this app.');
                }
                else {
                    _this.commonService.showToast("Error " + error);
                }
            });
        }).catch(function (error) {
            _this.commonService.hideLoader();
            console.log(error);
            _this.commonService.showToast(error);
        });
    };
    LoginPage.prototype.googleLogin = function () {
        var _this = this;
        this.commonService.showLoader();
        this.googlePlus.login({ 'webClientId': '500907002253-tloch3u45o16bhq2cd99pfvau928mitv.apps.googleusercontent.com', 'clientId': 'ph.kugihan.rider' })
            .then(function (response) {
            //console.log(response);
            var googleCredentials = firebase_app__WEBPACK_IMPORTED_MODULE_10__["auth"].GoogleAuthProvider.credential(response.idToken);
            Object(firebase_app__WEBPACK_IMPORTED_MODULE_10__["auth"])().signInWithCredential(googleCredentials)
                .then(function (success) {
                console.log("Firebase success: " + JSON.stringify(success));
                _this.authService.loginFbRegister(success);
                localStorage.setItem('isLoggedIn', 'true');
                _this.router.navigateByUrl('/home');
            }).catch(function (error) {
                console.log(error);
                _this.commonService.hideLoader();
                if (error.code === 'auth/account-exists-with-different-credential') {
                    _this.commonService.showToast('Your email is already bind to an existing account for this app.');
                }
                else {
                    _this.commonService.showToast("Error " + error);
                }
            });
        }).catch(function (error) {
            _this.commonService.hideLoader();
            console.log(error);
            _this.commonService.showToast(error);
        });
    };
    LoginPage.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"] },
        { type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_8__["Facebook"] },
        { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_9__["GooglePlus"] }
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
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"],
            _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_8__["Facebook"],
            _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_9__["GooglePlus"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module-es5.js.map