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

module.exports = "ion-title h3, ion-title p {\n  margin: 4px 0px;\n}\nion-title h3 {\n  font-size: 16px;\n}\nion-title p {\n  font-size: 12px;\n}\nion-text {\n  white-space: pre-wrap !important;\n}\nion-note {\n  font-size: 14px;\n  color: #333;\n  font-weight: 500;\n}\nh3 {\n  font-weight: 500 !important;\n}\n.datetime {\n  color: #777;\n  font-weight: 400;\n}\nion-badge {\n  text-transform: uppercase;\n  color: #ffffff;\n}\ntable {\n  width: 100%;\n}\ntr {\n  border: 1px solid #eee;\n}\ntd {\n  padding: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmlkZWluZm8vRDpcXEtVR0lIQU4gRVhQUkVTU1xcU1lTVEVNIDIwMjBcXEt1Z2loYW4gRXhwcmVzc1xcS3VnaWhhbiBFeHByZXNzXFxrdWdpaGFuLWV4cHJlc3NcXHJpZGVyL3NyY1xcYXBwXFxyaWRlaW5mb1xccmlkZWluZm8ucGFnZS5zY3NzIiwic3JjL2FwcC9yaWRlaW5mby9yaWRlaW5mby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxlQUFBO0FDQVI7QURFSTtFQUNJLGVBQUE7QUNBUjtBREVJO0VBQ0ksZUFBQTtBQ0FSO0FER0E7RUFDSSxnQ0FBQTtBQ0FKO0FER0E7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDQUo7QURHQTtFQUNJLDJCQUFBO0FDQUo7QURHQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQ0FKO0FER0E7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUNBSjtBREdBO0VBQ0ksV0FBQTtBQ0FKO0FER0E7RUFDSSxzQkFBQTtBQ0FKO0FER0E7RUFDSSxZQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9yaWRlaW5mby9yaWRlaW5mby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGV7XG4gICAgaDMsIHB7XG4gICAgICAgIG1hcmdpbjogNHB4IDBweDtcbiAgICB9XG4gICAgaDN7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG4gICAgcHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbn1cbmlvbi10ZXh0e1xuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcCAhaW1wb3J0YW50O1xufVxuXG5pb24tbm90ZXtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuaDN7XG4gICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xufVxuXG4uZGF0ZXRpbWV7XG4gICAgY29sb3I6ICM3Nzc7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuaW9uLWJhZGdle1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6ICNmZmZmZmY7XG59XG5cbnRhYmxle1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG50cntcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xufVxuXG50ZHtcbiAgICBwYWRkaW5nOiA0cHg7XG59IiwiaW9uLXRpdGxlIGgzLCBpb24tdGl0bGUgcCB7XG4gIG1hcmdpbjogNHB4IDBweDtcbn1cbmlvbi10aXRsZSBoMyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbmlvbi10aXRsZSBwIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG5pb24tdGV4dCB7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcCAhaW1wb3J0YW50O1xufVxuXG5pb24tbm90ZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMzMzM7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbmgzIHtcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xufVxuXG4uZGF0ZXRpbWUge1xuICBjb2xvcjogIzc3NztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuaW9uLWJhZGdlIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbn1cblxudGQge1xuICBwYWRkaW5nOiA0cHg7XG59Il19 */"

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