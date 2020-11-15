(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forget-forget-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/forget/forget.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/forget/forget.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"light\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{'RESET_PASSWORD' | translate}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <div class=\"login-header\">\r\n    <img src=\"./assets/img/logo.png\" />\r\n    <!-- <h3>{{ 'APP_NAME' | translate }}</h3>\r\n    <p>{{ 'APP_SUBTEXT' | translate }} </p> -->\r\n  </div>\r\n  <div class=\"ion-padding\">\r\n    <ion-list lines=\"none\">\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">{{'EMAIL_ADDRESS' | translate }}</ion-label>\r\n        <ion-input type=\"text\" [(ngModel)]=\"email\"></ion-input>\r\n      </ion-item>\r\n    </ion-list>\r\n    <div style=\"padding:0px 16px\">\r\n      <ion-button color=\"dark\" expand=\"block\" (click)=\"reset()\">{{'RESET_PASSWORD' | translate }}</ion-button>\r\n    </div>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/forget/forget.module.ts":
/*!*****************************************!*\
  !*** ./src/app/forget/forget.module.ts ***!
  \*****************************************/
/*! exports provided: ForgetPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPageModule", function() { return ForgetPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forget_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forget.page */ "./src/app/forget/forget.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








const routes = [
    {
        path: '',
        component: _forget_page__WEBPACK_IMPORTED_MODULE_6__["ForgetPage"]
    }
];
let ForgetPageModule = class ForgetPageModule {
};
ForgetPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_forget_page__WEBPACK_IMPORTED_MODULE_6__["ForgetPage"]]
    })
], ForgetPageModule);



/***/ }),

/***/ "./src/app/forget/forget.page.scss":
/*!*****************************************!*\
  !*** ./src/app/forget/forget.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-md:after {\n  background-image: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ2V0L0M6XFxVc2Vyc1xcRU1CRVJTUEVDIC0gTG91XFxEZXNrdG9wXFxLdWdpaGFuXFxyaWRlci9zcmNcXGFwcFxcZm9yZ2V0XFxmb3JnZXQucGFnZS5zY3NzIiwic3JjL2FwcC9mb3JnZXQvZm9yZ2V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlDQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9mb3JnZXQvZm9yZ2V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItbWQ6YWZ0ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lICFpbXBvcnRhbnQ7XHJcbn0iLCIuaGVhZGVyLW1kOmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/forget/forget.page.ts":
/*!***************************************!*\
  !*** ./src/app/forget/forget.page.ts ***!
  \***************************************/
/*! exports provided: ForgetPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPage", function() { return ForgetPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");




let ForgetPage = class ForgetPage {
    constructor(authService, commonService) {
        this.authService = authService;
        this.commonService = commonService;
    }
    ngOnInit() {
    }
    reset() {
        if (this.email) {
            let email = (this.email).toLowerCase().trim();
            this.commonService.showLoader();
            this.authService.resetPassword(email)
                .then(() => {
                this.commonService.hideLoader();
                this.commonService.showToast('Please Check inbox');
            })
                .catch(err => {
                this.commonService.hideLoader();
                this.commonService.showToast(err.message);
            });
        }
    }
};
ForgetPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }
];
ForgetPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forget',
        template: __webpack_require__(/*! raw-loader!./forget.page.html */ "./node_modules/raw-loader/index.js!./src/app/forget/forget.page.html"),
        styles: [__webpack_require__(/*! ./forget.page.scss */ "./src/app/forget/forget.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])
], ForgetPage);



/***/ })

}]);
//# sourceMappingURL=forget-forget-module-es2015.js.map