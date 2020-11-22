(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forget-forget-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/forget/forget.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/forget/forget.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"light\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{'RESET_PASSWORD' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"login-header\">\n    <img src=\"./assets/img/logo.png\" />\n    <!-- <h3>{{ 'APP_NAME' | translate }}</h3>\n    <p>{{ 'APP_SUBTEXT' | translate }} </p> -->\n  </div>\n  <div class=\"ion-padding\">\n    <ion-list lines=\"none\">\n      <ion-item>\n        <ion-label position=\"stacked\">{{'EMAIL_ADDRESS' | translate }}</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"email\"></ion-input>\n      </ion-item>\n    </ion-list>\n    <div style=\"padding:0px 16px\">\n      <ion-button color=\"dark\" expand=\"block\" (click)=\"reset()\">{{'RESET_PASSWORD' | translate }}</ion-button>\n    </div>\n  </div>\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forget_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forget.page */ "./src/app/forget/forget.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var routes = [
    {
        path: '',
        component: _forget_page__WEBPACK_IMPORTED_MODULE_6__["ForgetPage"]
    }
];
var ForgetPageModule = /** @class */ (function () {
    function ForgetPageModule() {
    }
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
    return ForgetPageModule;
}());



/***/ }),

/***/ "./src/app/forget/forget.page.scss":
/*!*****************************************!*\
  !*** ./src/app/forget/forget.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-md:after {\n  background-image: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rdWdpaGFuZXhwcmVzcy9EZXNrdG9wL2t1Z2loYW4tcmlkZXIvc3JjL2FwcC9mb3JnZXQvZm9yZ2V0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvZm9yZ2V0L2ZvcmdldC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQ0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZm9yZ2V0L2ZvcmdldC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLW1kOmFmdGVye1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmUgIWltcG9ydGFudDtcbn0iLCIuaGVhZGVyLW1kOmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZSAhaW1wb3J0YW50O1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");




var ForgetPage = /** @class */ (function () {
    function ForgetPage(authService, commonService) {
        this.authService = authService;
        this.commonService = commonService;
    }
    ForgetPage.prototype.ngOnInit = function () {
    };
    ForgetPage.prototype.reset = function () {
        var _this = this;
        if (this.email) {
            var email = (this.email).toLowerCase().trim();
            this.commonService.showLoader();
            this.authService.resetPassword(email)
                .then(function () {
                _this.commonService.hideLoader();
                _this.commonService.showToast('Please Check inbox');
            })
                .catch(function (err) {
                _this.commonService.hideLoader();
                _this.commonService.showToast(err.message);
            });
        }
    };
    ForgetPage.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }
    ]; };
    ForgetPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forget',
            template: __webpack_require__(/*! raw-loader!./forget.page.html */ "./node_modules/raw-loader/index.js!./src/app/forget/forget.page.html"),
            styles: [__webpack_require__(/*! ./forget.page.scss */ "./src/app/forget/forget.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])
    ], ForgetPage);
    return ForgetPage;
}());



/***/ })

}]);
//# sourceMappingURL=forget-forget-module-es5.js.map