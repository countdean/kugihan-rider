(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rideinfo-rideinfo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/rideinfo/rideinfo.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/rideinfo/rideinfo.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      <h3>{{trip.createdAt | date: 'MMM dd, yyyy hh:mm a'}}</h3>\n      <p>#{{trip.createdAt}}</p>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list lines=\"none\" *ngIf=\"trip.createdAt != null\">\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <img src=\"{{driver.photoURL}}\" />\n      </ion-avatar>\n      <ion-label>\n        <p *ngIf=\"trip.rating\">{{ 'RATED' | translate }} {{trip.rating}}</p>\n        <h3>{{driver.name}}</h3>\n      </ion-label>\n      <ion-badge slot=\"end\" color=\"dark\">{{trip.status}}</ion-badge>\n    </ion-item>\n    <ion-item text-wrap>\n      <ion-icon style=\"margin-right:18px\" name=\"pin\" color=\"success\" slot=\"start\"></ion-icon>\n      <ion-label>\n        <p>{{ trip.pickedUpAt | date: 'shortTime'}}</p>\n        <ion-text>\n          <h3>{{trip.origin.vicinity}}</h3>\n        </ion-text>\n      </ion-label>\n    </ion-item>\n    <ion-item text-wrap>\n      <ion-icon style=\"margin-right:18px\" name=\"pin\" color=\"danger\" slot=\"start\"></ion-icon>\n      <ion-label>\n        <p>{{ trip.droppedOffAt | date: 'shortTime'}}</p>\n        <ion-text>\n          <h3>{{trip.destination.vicinity}}</h3>\n        </ion-text>\n      </ion-label>\n    </ion-item>\n    <ion-item-divider>\n      <h5>{{ 'BILLING_DETAILS' | translate }}</h5>\n    </ion-item-divider>\n    <ion-item>\n      <ion-label>{{ 'FEE' | translate }}</ion-label>\n      <ion-text slot=\"end\">{{ trip.currency }} {{trip.rawfee}}</ion-text>\n    </ion-item>\n    <ion-item *ngIf=\"trip.discount\">\n      <ion-label>\n        {{ 'DISCOUNT' | translate }}\n        <p>{{trip.promocode}} • {{trip.discount}} %</p>\n      </ion-label>\n      <ion-text slot=\"end\">{{ trip.currency }} {{ discount }}</ion-text>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        {{ 'TAX' | translate }}\n        <p> {{ trip.tax }} %</p>\n      </ion-label>\n      <ion-text slot=\"end\">\n        {{ trip.currency }} {{ tax }}\n      </ion-text>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        {{ 'FINAL' | translate }}\n        <p>{{trip.paymentMethod}}</p>\n      </ion-label>\n      <ion-text slot=\"end\">\n        {{ trip.currency }} {{trip.fee_taxed}}\n      </ion-text>\n    </ion-item>\n  </ion-list>\n</ion-content>"

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

module.exports = "ion-title h3, ion-title p {\n  margin: 4px 0px;\n}\nion-title h3 {\n  font-size: 16px;\n}\nion-title p {\n  font-size: 12px;\n}\nion-text {\n  white-space: pre-wrap !important;\n}\nion-note {\n  font-size: 14px;\n  color: #333;\n  font-weight: 500;\n}\nh3 {\n  font-weight: 500 !important;\n}\n.datetime {\n  color: #777;\n  font-weight: 400;\n}\nion-badge {\n  text-transform: uppercase;\n  color: #ffffff;\n}\ntable {\n  width: 100%;\n}\ntr {\n  border: 1px solid #eee;\n}\ntd {\n  padding: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rdWdpaGFuZXhwcmVzcy9EZXNrdG9wL2t1Z2loYW4tcmlkZXIvc3JjL2FwcC9yaWRlaW5mby9yaWRlaW5mby5wYWdlLnNjc3MiLCJzcmMvYXBwL3JpZGVpbmZvL3JpZGVpbmZvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGVBQUE7QUNBUjtBREVJO0VBQ0ksZUFBQTtBQ0FSO0FERUk7RUFDSSxlQUFBO0FDQVI7QURHQTtFQUNJLGdDQUFBO0FDQUo7QURHQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNBSjtBREdBO0VBQ0ksMkJBQUE7QUNBSjtBREdBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FDQUo7QURHQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBQ0FKO0FER0E7RUFDSSxXQUFBO0FDQUo7QURHQTtFQUNJLHNCQUFBO0FDQUo7QURHQTtFQUNJLFlBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3JpZGVpbmZvL3JpZGVpbmZvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZXtcbiAgICBoMywgcHtcbiAgICAgICAgbWFyZ2luOiA0cHggMHB4O1xuICAgIH1cbiAgICBoM3tcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbiAgICBwe1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxufVxuaW9uLXRleHR7XG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1ub3Rle1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzMzMztcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG5oM3tcbiAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG59XG5cbi5kYXRldGltZXtcbiAgICBjb2xvcjogIzc3NztcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuXG5pb24tYmFkZ2V7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cblxudGFibGV7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbnRye1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG59XG5cbnRke1xuICAgIHBhZGRpbmc6IDRweDtcbn0iLCJpb24tdGl0bGUgaDMsIGlvbi10aXRsZSBwIHtcbiAgbWFyZ2luOiA0cHggMHB4O1xufVxuaW9uLXRpdGxlIGgzIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuaW9uLXRpdGxlIHAge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbmlvbi10ZXh0IHtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1ub3RlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzMzMztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuaDMge1xuICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG59XG5cbi5kYXRldGltZSB7XG4gIGNvbG9yOiAjNzc3O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5pb24tYmFkZ2Uge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxudHIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xufVxuXG50ZCB7XG4gIHBhZGRpbmc6IDRweDtcbn0iXX0= */"

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