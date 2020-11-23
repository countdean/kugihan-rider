(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rideinfo-rideinfo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/rideinfo/rideinfo.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/rideinfo/rideinfo.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"dark\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <h3>{{trip.createdAt | date: 'MMM dd, yyyy hh:mm a'}}</h3>\r\n      <p>#{{trip.createdAt}}</p>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list lines=\"none\" *ngIf=\"trip.createdAt != null\">\r\n    <ion-item>\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"{{driver.photoURL}}\" />\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <p *ngIf=\"trip.rating\">{{ 'RATED' | translate }} {{trip.rating}}</p>\r\n        <h3>{{driver.name}}</h3>\r\n      </ion-label>\r\n      <ion-badge slot=\"end\" color=\"dark\">{{trip.status}}</ion-badge>\r\n    </ion-item>\r\n    <ion-item text-wrap>\r\n      <ion-icon style=\"margin-right:18px\" name=\"pin\" color=\"success\" slot=\"start\"></ion-icon>\r\n      <ion-label>\r\n        <p>{{ trip.pickedUpAt | date: 'shortTime'}}</p>\r\n        <ion-text>\r\n          <h3>{{trip.origin.vicinity}}</h3>\r\n        </ion-text>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item text-wrap>\r\n      <ion-icon style=\"margin-right:18px\" name=\"pin\" color=\"danger\" slot=\"start\"></ion-icon>\r\n      <ion-label>\r\n        <p>{{ trip.droppedOffAt | date: 'shortTime'}}</p>\r\n        <ion-text>\r\n          <h3>{{trip.destination.vicinity}}</h3>\r\n        </ion-text>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item-divider>\r\n      <h5>{{ 'BILLING_DETAILS' | translate }}</h5>\r\n    </ion-item-divider>\r\n    <ion-item>\r\n      <ion-label>{{ 'FEE' | translate }}</ion-label>\r\n      <ion-text slot=\"end\">{{ trip.currency }} {{trip.rawfee}}</ion-text>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"trip.discount\">\r\n      <ion-label>\r\n        {{ 'DISCOUNT' | translate }}\r\n        <p>{{trip.promocode}} • {{trip.discount}} %</p>\r\n      </ion-label>\r\n      <ion-text slot=\"end\">{{ trip.currency }} {{ discount }}</ion-text>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>\r\n        {{ 'TAX' | translate }}\r\n        <p> {{ trip.tax }} %</p>\r\n      </ion-label>\r\n      <ion-text slot=\"end\">\r\n        {{ trip.currency }} {{ tax }}\r\n      </ion-text>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>\r\n        {{ 'FINAL' | translate }}\r\n        <p>{{trip.paymentMethod}}</p>\r\n      </ion-label>\r\n      <ion-text slot=\"end\">\r\n        {{ trip.currency }} {{trip.fee_taxed}}\r\n      </ion-text>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/rideinfo/rideinfo.module.ts":
/*!*********************************************!*\
  !*** ./src/app/rideinfo/rideinfo.module.ts ***!
  \*********************************************/
/*! exports provided: RideinfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RideinfoPageModule", function() { return RideinfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _rideinfo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rideinfo.page */ "./src/app/rideinfo/rideinfo.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








const routes = [
    {
        path: '',
        component: _rideinfo_page__WEBPACK_IMPORTED_MODULE_6__["RideinfoPage"]
    }
];
let RideinfoPageModule = class RideinfoPageModule {
};
RideinfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_rideinfo_page__WEBPACK_IMPORTED_MODULE_6__["RideinfoPage"]]
    })
], RideinfoPageModule);



/***/ }),

/***/ "./src/app/rideinfo/rideinfo.page.scss":
/*!*********************************************!*\
  !*** ./src/app/rideinfo/rideinfo.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title h3, ion-title p {\n  margin: 4px 0px;\n}\nion-title h3 {\n  font-size: 16px;\n}\nion-title p {\n  font-size: 12px;\n}\nion-text {\n  white-space: pre-wrap !important;\n}\nion-note {\n  font-size: 14px;\n  color: #333;\n  font-weight: 500;\n}\nh3 {\n  font-weight: 500 !important;\n}\n.datetime {\n  color: #777;\n  font-weight: 400;\n}\nion-badge {\n  text-transform: uppercase;\n  color: #ffffff;\n}\ntable {\n  width: 100%;\n}\ntr {\n  border: 1px solid #eee;\n}\ntd {\n  padding: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmlkZWluZm8vQzpcXFVzZXJzXFxkZWFucVxcRGVza3RvcFxcS3VnaWhhbiBSaWRlci9zcmNcXGFwcFxccmlkZWluZm9cXHJpZGVpbmZvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmlkZWluZm8vcmlkZWluZm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksZUFBQTtBQ0FSO0FERUk7RUFDSSxlQUFBO0FDQVI7QURFSTtFQUNJLGVBQUE7QUNBUjtBREdBO0VBQ0ksZ0NBQUE7QUNBSjtBREdBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0FKO0FER0E7RUFDSSwyQkFBQTtBQ0FKO0FER0E7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUNBSjtBREdBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0FDQUo7QURHQTtFQUNJLFdBQUE7QUNBSjtBREdBO0VBQ0ksc0JBQUE7QUNBSjtBREdBO0VBQ0ksWUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcmlkZWluZm8vcmlkZWluZm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxle1xyXG4gICAgaDMsIHB7XHJcbiAgICAgICAgbWFyZ2luOiA0cHggMHB4O1xyXG4gICAgfVxyXG4gICAgaDN7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbn1cclxuaW9uLXRleHR7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXAgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLW5vdGV7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbmgze1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGF0ZXRpbWV7XHJcbiAgICBjb2xvcjogIzc3NztcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbmlvbi1iYWRnZXtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxudGFibGV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxudHJ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG59XHJcblxyXG50ZHtcclxuICAgIHBhZGRpbmc6IDRweDtcclxufSIsImlvbi10aXRsZSBoMywgaW9uLXRpdGxlIHAge1xuICBtYXJnaW46IDRweCAwcHg7XG59XG5pb24tdGl0bGUgaDMge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5pb24tdGl0bGUgcCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuaW9uLXRleHQge1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXAgIWltcG9ydGFudDtcbn1cblxuaW9uLW5vdGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5oMyB7XG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbn1cblxuLmRhdGV0aW1lIHtcbiAgY29sb3I6ICM3Nzc7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbmlvbi1iYWRnZSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50ciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG59XG5cbnRkIHtcbiAgcGFkZGluZzogNHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/rideinfo/rideinfo.page.ts":
/*!*******************************************!*\
  !*** ./src/app/rideinfo/rideinfo.page.ts ***!
  \*******************************************/
/*! exports provided: RideinfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RideinfoPage", function() { return RideinfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_trip_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/trip.service */ "./src/app/services/trip.service.ts");
/* harmony import */ var _services_driver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/driver.service */ "./src/app/services/driver.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let RideinfoPage = class RideinfoPage {
    constructor(route, tripService, driverService) {
        this.route = route;
        this.tripService = tripService;
        this.driverService = driverService;
        this.trip = {};
        this.driver = {};
        this.tridId = this.route.snapshot.paramMap.get('id');
        console.log(this.tridId);
    }
    ngOnInit() {
        this.tripService.getTrip(this.tridId).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(snap => {
            this.trip = snap;
            console.log(this.trip);
            this.discount = (this.trip.rawfee * (this.trip.discount / 100)).toFixed(2);
            this.tax = (this.trip.fee * (this.trip.tax / 100)).toFixed(2);
            this.driverService.getDriver(this.trip.driverId).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(snap => {
                this.driver = snap;
            });
        });
    }
};
RideinfoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_trip_service__WEBPACK_IMPORTED_MODULE_3__["TripService"] },
    { type: _services_driver_service__WEBPACK_IMPORTED_MODULE_4__["DriverService"] }
];
RideinfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rideinfo',
        template: __webpack_require__(/*! raw-loader!./rideinfo.page.html */ "./node_modules/raw-loader/index.js!./src/app/rideinfo/rideinfo.page.html"),
        styles: [__webpack_require__(/*! ./rideinfo.page.scss */ "./src/app/rideinfo/rideinfo.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _services_trip_service__WEBPACK_IMPORTED_MODULE_3__["TripService"],
        _services_driver_service__WEBPACK_IMPORTED_MODULE_4__["DriverService"]])
], RideinfoPage);



/***/ })

}]);
//# sourceMappingURL=rideinfo-rideinfo-module-es2015.js.map