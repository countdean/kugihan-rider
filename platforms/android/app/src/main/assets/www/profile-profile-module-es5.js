(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/profile.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/profile.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"dark\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{'BASIC_PROFILE' | translate}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <div *ngIf=\"user != null && user != undefined\">\r\n    <div style=\"text-align:center\">\r\n      <img src=\"{{ user.photoURL }}\" onerror=\"this.src='./assets/img/default.png'\"\r\n        style=\"width:80px;height:80px;border-radius:100px\" (click)=\"chooseFile()\">\r\n      <form ngNoForm>\r\n        <input id=\"avatar\" name=\"file\" type=\"file\" (change)=\"upload()\">\r\n      </form>\r\n    </div>\r\n    <ion-list lines=\"none\">\r\n      <ion-item>\r\n        <ion-label position=\"stacked\" color=\"primary\">{{'FULLNAME' | translate}}</ion-label>\r\n        <ion-input type=\"text\" [(ngModel)]=\"user.name\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\" color=\"primary\">{{'PHONE_NUMBER' | translate}}</ion-label>\r\n        <ion-input type=\"text\" [(ngModel)]=\"user.phoneNumber\" [disabled]=\"user.isPhoneVerified\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\" color=\"primary\">{{'EMAIL_ADDRESS' | translate}}</ion-label>\r\n        <ion-input type=\"text\" [(ngModel)]=\"user.email\" disabled></ion-input>\r\n      </ion-item>\r\n    </ion-list>\r\n    <div class=\"ion-padding\">\r\n      <ion-button color=\"dark\" expand=\"block\" (click)=\"save()\">{{'SAVE' | translate}}</ion-button>\r\n      &nbsp;\r\n      &nbsp;\r\n      <ion-button (click)=\"logout()\" expand=\"block\" fill=\"clear\" color=\"dark\">{{'LOGOUT' | translate}}</ion-button>\r\n    </div>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]
    }
];
var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/profile/profile.page.scss":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#avatar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9DOlxcVXNlcnNcXEVNQkVSU1BFQyAtIExvdVxcRGVza3RvcFxcS3VnaWhhblxccmlkZXIvc3JjXFxhcHBcXHByb2ZpbGVcXHByb2ZpbGUucGFnZS5zY3NzIiwic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhdmF0YXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9IiwiI2F2YXRhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/profile/profile.page.ts":
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");








var ProfilePage = /** @class */ (function () {
    function ProfilePage(authService, common, router, afStorage, platform) {
        this.authService = authService;
        this.common = common;
        this.router = router;
        this.afStorage = afStorage;
        this.platform = platform;
        this.user = {};
    }
    ProfilePage.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getUser(this.authService.getUserData().uid).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function (snapshot) {
            _this.user = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ uid: snapshot.key }, snapshot.payload.val());
            _this.user.isEmailVerified = _this.authService.getUserData().emailVerified;
            console.log(_this.user);
        });
    };
    // save user info
    ProfilePage.prototype.save = function () {
        this.authService.updateUserProfile(this.user);
        this.common.showToast("Updated");
    };
    // choose file for upload
    ProfilePage.prototype.chooseFile = function () {
        document.getElementById('avatar').click();
    };
    ProfilePage.prototype.upload = function () {
        var _this = this;
        // Create a root reference
        this.common.showLoader();
        var _loop_1 = function (selectedFile) {
            var path = '/users/' + Date.now() + ("_" + selectedFile.name);
            var ref = this_1.afStorage.ref(path);
            ref.put(selectedFile).then(function () {
                ref.getDownloadURL().subscribe(function (data) {
                    _this.user.photoURL = data;
                    _this.common.hideLoader();
                });
            }).catch(function (err) {
                _this.common.hideLoader();
                console.log(err);
            });
        };
        var this_1 = this;
        for (var _i = 0, _a = [document.getElementById('avatar').files[0]]; _i < _a.length; _i++) {
            var selectedFile = _a[_i];
            _loop_1(selectedFile);
        }
    };
    ProfilePage.prototype.logout = function () {
        var _this = this;
        this.authService.logout().then(function () {
            localStorage.clear();
            _this.router.navigateByUrl('/login', { skipLocationChange: true, replaceUrl: true });
        });
    };
    ProfilePage.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] }
    ]; };
    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/profile/profile.page.html"),
            styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/profile/profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"]])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es5.js.map