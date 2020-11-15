(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["history-history-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/history/history.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/history/history.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"dark\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>{{'HISTORY' | translate}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <p *ngIf=\"trips.length == 0\" style=\"margin-top: 5px; text-align: center\">{{'NO_TRIPS_FOUND' | translate}}</p>\r\n  <ion-list lines=\"none\">\r\n    <ion-item *ngFor=\"let trip of trips\" (click)=\"viewTrip(trip)\">\r\n      <ion-icon name=\"car\" slot=\"start\" style=\"margin-right: 20px;\"></ion-icon>\r\n      <ion-label>\r\n        <h3>{{ trip.createdAt | date:'MMM dd, yyyy hh:mm a'}}</h3>\r\n        <p>{{ trip.createdAt }}</p>\r\n        <p>{{ trip.origin.vicinity }}</p>\r\n        <p>{{ trip.destination.vicinity }}</p>\r\n      </ion-label>\r\n      <ion-text slot=\"end\" style=\"margin: 0;\">\r\n        <p class=\"currency\">{{trip.currency}} {{trip.fee}}</p>\r\n      </ion-text>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/history/history.module.ts":
/*!*******************************************!*\
  !*** ./src/app/history/history.module.ts ***!
  \*******************************************/
/*! exports provided: HistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPageModule", function() { return HistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./history.page */ "./src/app/history/history.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








const routes = [
    {
        path: '',
        component: _history_page__WEBPACK_IMPORTED_MODULE_6__["HistoryPage"]
    }
];
let HistoryPageModule = class HistoryPageModule {
};
HistoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_history_page__WEBPACK_IMPORTED_MODULE_6__["HistoryPage"]]
    })
], HistoryPageModule);



/***/ }),

/***/ "./src/app/history/history.page.scss":
/*!*******************************************!*\
  !*** ./src/app/history/history.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\n  font-weight: 500;\n}\n\n.currency {\n  color: #4caf50;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGlzdG9yeS9DOlxcVXNlcnNcXEVNQkVSU1BFQyAtIExvdVxcRGVza3RvcFxcS3VnaWhhblxccmlkZXIvc3JjXFxhcHBcXGhpc3RvcnlcXGhpc3RvcnkucGFnZS5zY3NzIiwic3JjL2FwcC9oaXN0b3J5L2hpc3RvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvaGlzdG9yeS9oaXN0b3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgze1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMFxyXG59XHJcblxyXG4uY3VycmVuY3l7XHJcbiAgICBjb2xvcjogIzRjYWY1MDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn0iLCJoMyB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5jdXJyZW5jeSB7XG4gIGNvbG9yOiAjNGNhZjUwO1xuICBmb250LXdlaWdodDogNTAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/history/history.page.ts":
/*!*****************************************!*\
  !*** ./src/app/history/history.page.ts ***!
  \*****************************************/
/*! exports provided: HistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPage", function() { return HistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_trip_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/trip.service */ "./src/app/services/trip.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let HistoryPage = class HistoryPage {
    constructor(common, tripService, translate, router) {
        this.common = common;
        this.tripService = tripService;
        this.translate = translate;
        this.router = router;
        this.trips = [];
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.getTrips();
    }
    getTrips() {
        this.common.showLoader();
        this.tripService.getTrips().valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe((snapshot) => {
            if (snapshot != null)
                this.trips = snapshot.reverse();
            this.common.hideLoader();
        });
    }
    viewTrip(trip) {
        if (trip.status == 'going') {
            this.tripService.setId(trip.key);
            this.router.navigateByUrl('/tracking');
        }
        else {
            this.router.navigateByUrl('/rideinfo/' + trip.key);
        }
    }
};
HistoryPage.ctorParameters = () => [
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] },
    { type: _services_trip_service__WEBPACK_IMPORTED_MODULE_3__["TripService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
HistoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-history',
        template: __webpack_require__(/*! raw-loader!./history.page.html */ "./node_modules/raw-loader/index.js!./src/app/history/history.page.html"),
        styles: [__webpack_require__(/*! ./history.page.scss */ "./src/app/history/history.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"],
        _services_trip_service__WEBPACK_IMPORTED_MODULE_3__["TripService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], HistoryPage);



/***/ })

}]);
//# sourceMappingURL=history-history-module-es2015.js.map