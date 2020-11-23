(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tracking-tracking-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tracking/tracking.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tracking/tracking.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"dark\">\r\n    <ion-title>{{'ON_THE_WAY' | translate}}</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"danger\" fill=\"solid\" size=\"small\" *ngIf=\"trip.status == 'waiting'\" (click)=\"cancelTrip()\">\r\n        {{'CANCEL_TRIP' | translate}}\r\n      </ion-button>\r\n      <ion-button fill=\"solid\" color=\"danger\" href=\"tel:{{sos}}\" *ngIf=\"trip.status == 'going'\">{{'SOS' | translate}}\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div id=\"map\" style=\"height:100%\"></div>\r\n  <ion-card>\r\n    <!-- <div style=\"text-align:right; color: #222\">\r\n      <span style=\"background:#ffff00\">{{ 'OTP' | translate}}: {{ (trip)?.otp }}</span>\r\n    </div> -->\r\n    <ion-item lines=\"none\">\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"{{ (driver)?.photoURL }}\" />\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <ion-text>\r\n          <h2>{{ (driver)?.name }} &nbsp; {{(driver)?.rating}} <ion-icon name=\"md-star\" color=\"yellow\"></ion-icon>\r\n          </h2>\r\n        </ion-text>\r\n        <ion-text>\r\n          <p>{{ (driver)?.plate }} &middot; {{ (driver)?.brand }}</p>\r\n        </ion-text>\r\n      </ion-label>\r\n      <ion-button color=\"dark\" slot=\"end\" href=\"tel: {{ (driver)?.phoneNumber }} \">\r\n        <ion-icon name=\"call\"></ion-icon>&nbsp;{{'CALL' | translate}}\r\n      </ion-button>\r\n    </ion-item>\r\n    <ion-row>\r\n      <ion-col>\r\n        <p>{{'DISTANCE' | translate}}</p>\r\n        <h5>{{distanceText}}</h5>\r\n      </ion-col>\r\n      <ion-col>\r\n        <p>{{'PRICE' | translate}}</p>\r\n        <h5>{{ trip.currency }} {{trip.fee}}</h5>\r\n      </ion-col>\r\n      <ion-col>\r\n        <p>{{'ETA' | translate}}</p>\r\n        <h5>{{durationText}}</h5>\r\n      </ion-col>\r\n      <ion-col>\r\n        <p>{{'PAYMENT' | translate}}</p>\r\n        <h5>{{trip.paymentMethod}}</h5>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-card>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/tracking/tracking.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tracking/tracking.module.ts ***!
  \*********************************************/
/*! exports provided: TrackingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackingPageModule", function() { return TrackingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tracking_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tracking.page */ "./src/app/tracking/tracking.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var routes = [
    {
        path: '',
        component: _tracking_page__WEBPACK_IMPORTED_MODULE_6__["TrackingPage"]
    }
];
var TrackingPageModule = /** @class */ (function () {
    function TrackingPageModule() {
    }
    TrackingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tracking_page__WEBPACK_IMPORTED_MODULE_6__["TrackingPage"]]
        })
    ], TrackingPageModule);
    return TrackingPageModule;
}());



/***/ }),

/***/ "./src/app/tracking/tracking.page.scss":
/*!*********************************************!*\
  !*** ./src/app/tracking/tracking.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-col p, h5 {\n  margin: 0;\n  text-align: center;\n}\n\nion-col h5 {\n  font-size: 16px;\n  color: #333;\n}\n\nion-card {\n  position: absolute;\n  z-index: 999999;\n  background: #fff;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 8px;\n}\n\n.footer-md:before {\n  background-image: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhY2tpbmcvQzpcXFVzZXJzXFxkZWFucVxcRGVza3RvcFxcS3VnaWhhbiBSaWRlci9zcmNcXGFwcFxcdHJhY2tpbmdcXHRyYWNraW5nLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdHJhY2tpbmcvdHJhY2tpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQ0VKOztBRENBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0FDRUo7O0FEQ0E7RUFDSSxpQ0FBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvdHJhY2tpbmcvdHJhY2tpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbCBwLCBoNXtcclxuICAgIG1hcmdpbjowO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmlvbi1jb2wgaDV7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzMzMztcclxufVxyXG5cclxuaW9uLWNhcmR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiA5OTk5OTk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG59XHJcblxyXG4uZm9vdGVyLW1kOmJlZm9yZXtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmUgIWltcG9ydGFudDtcclxufSIsImlvbi1jb2wgcCwgaDUge1xuICBtYXJnaW46IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWNvbCBoNSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMzMzM7XG59XG5cbmlvbi1jYXJkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk5OTk7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuLmZvb3Rlci1tZDpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/tracking/tracking.page.ts":
/*!*******************************************!*\
  !*** ./src/app/tracking/tracking.page.ts ***!
  \*******************************************/
/*! exports provided: TrackingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackingPage", function() { return TrackingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _services_driver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/driver.service */ "./src/app/services/driver.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_trip_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/trip.service */ "./src/app/services/trip.service.ts");
/* harmony import */ var _services_place_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/place.service */ "./src/app/services/place.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _rating_rating_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../rating/rating.page */ "./src/app/rating/rating.page.ts");











var TrackingPage = /** @class */ (function () {
    function TrackingPage(driverService, tripService, placeService, router, menuCtrl, afdb, alertCtrl, modalCtrl) {
        this.driverService = driverService;
        this.tripService = tripService;
        this.placeService = placeService;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.afdb = afdb;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.trip = {};
        this.alertCnt = 0;
        this.rate = 5;
        this.distanceText = "-";
        this.durationText = "-";
        this.sos = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["SOS"];
    }
    TrackingPage.prototype.ngOnInit = function () {
    };
    TrackingPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.menuCtrl.enable(true);
        var tripId = this.tripService.getId();
        var ref = this.tripService.getTrip(tripId).valueChanges().subscribe(function (snapshot) {
            if (snapshot != null) {
                console.log(_this.trip);
                _this.trip = snapshot;
                console.log(_this.trip);
                if (_this.trip.status == src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["TRIP_STATUS_CANCELED"]) {
                    clearInterval(_this.driverTracking);
                    _this.router.navigateByUrl('/home', { skipLocationChange: true, replaceUrl: true });
                    // this.ref.unsubscribe()
                    ref.unsubscribe();
                }
                if (_this.trip.status == src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["TRIP_STATUS_FINISHED"]) {
                    _this.modalCtrl.create({
                        component: _rating_rating_page__WEBPACK_IMPORTED_MODULE_10__["RatingPage"],
                        componentProps: {
                            trip: _this.trip,
                            driver: _this.driver
                        }
                    }).then(function (m) {
                        m.present();
                        ref.unsubscribe();
                    });
                }
                _this.driverService.getDriver(_this.trip.driverId).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(function (snap) {
                    console.log(snap);
                    _this.driver = snap;
                    // init map
                    _this.loadMap();
                });
            }
        });
    };
    TrackingPage.prototype.ionViewWillLeave = function () {
        clearInterval(this.driverTracking);
    };
    TrackingPage.prototype.loadMap = function () {
        console.log("load Map calling");
        var latLng = new google.maps.LatLng(this.trip.origin.location.lat, this.trip.origin.location.lng);
        var mapOptions = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].mapOptions;
        mapOptions.mapTypeId = google.maps.MapTypeId.ROADMAP;
        mapOptions.center = latLng;
        this.map = new google.maps.Map(document.getElementById("map"), mapOptions);
        this.marker = new google.maps.Marker({
            map: this.map,
            position: latLng,
            icon: {
                url: 'assets/img/map-suv.png',
                size: new google.maps.Size(32, 32),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(16, 16),
                scaledSize: new google.maps.Size(32, 32)
            },
        });
        var directionsDisplay;
        var directionsService = new google.maps.DirectionsService();
        directionsDisplay = new google.maps.DirectionsRenderer({
            polylineOptions: {
                strokeColor: "black"
            }
        });
        directionsDisplay.setMap(this.map);
        var origin = new google.maps.LatLng(this.trip.origin.location.lat, this.trip.origin.location.lng);
        var dest = new google.maps.LatLng(this.trip.destination.location.lat, this.trip.destination.location.lng);
        if (this.trip.dropOff.length > 0) {
            var finalWaypoints_1 = [];
            this.trip.dropOff.forEach(function (item) {
                finalWaypoints_1.push({ location: item.location });
            });
            console.log("THE DROP OFF " + JSON.stringify(finalWaypoints_1));
            var request = {
                origin: origin,
                destination: dest,
                waypoints: finalWaypoints_1,
                travelMode: google.maps.TravelMode.DRIVING
            };
        }
        else {
            var request = {
                origin: origin,
                destination: dest,
                travelMode: google.maps.TravelMode.DRIVING
            };
        }
        directionsService.route(request, function (response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                console.log(response);
                directionsDisplay.setDirections(response);
                directionsDisplay.setMap(this.map);
            }
            else {
                console.log("error");
            }
        });
        this.trackDriver();
    };
    // make array with range is n
    TrackingPage.prototype.range = function (n) {
        return new Array(Math.round(n));
    };
    TrackingPage.prototype.trackDriver = function () {
        // this.showDriverOnMap();
        var _this = this;
        this.driverTracking = setInterval(function () {
            _this.marker.setMap(null);
            _this.showDriverOnMap();
        }, src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["POSITION_INTERVAL"]);
        console.log(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["POSITION_INTERVAL"]);
    };
    TrackingPage.prototype.cancelTrip = function () {
        var _this = this;
        this.alertCtrl.create({
            message: "Are you sure want to cancel the trip",
            buttons: [{
                    text: "Yes",
                    handler: function () {
                        _this.tripService.cancelTrip(_this.trip.key).then(function (data) {
                            console.log(data);
                        });
                    }
                }, {
                    text: "No"
                }]
        }).then(function (res) { return res.present(); });
    };
    // show user on map
    TrackingPage.prototype.showDriverOnMap = function () {
        var _this = this;
        // get user's position
        this.driverService.getDriverPosition(this.placeService.getLocality(), this.driver.type, this.driver.uid).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(function (snapshot) {
            // create or update
            console.log(snapshot);
            var latLng = new google.maps.LatLng(snapshot.lat, snapshot.lng);
            if (_this.trip.status == src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["TRIP_STATUS_GOING"]) {
                _this.map.setCenter(latLng);
            }
            // show vehicle to map
            _this.marker = new google.maps.Marker({
                map: _this.map,
                position: latLng,
                icon: {
                    url: 'assets/img/map-suv.png',
                    size: new google.maps.Size(32, 32),
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(16, 16),
                    scaledSize: new google.maps.Size(32, 32)
                },
            });
            var directionsService = new google.maps.DirectionsService();
            var request = {};
            if (_this.trip.status == 'waiting') {
                request = {
                    origin: latLng,
                    destination: new google.maps.LatLng(_this.trip.origin.location.lat, _this.trip.origin.location.lng),
                    travelMode: google.maps.TravelMode.DRIVING
                };
            }
            else {
                request = {
                    origin: latLng,
                    destination: new google.maps.LatLng(_this.trip.destination.location.lat, _this.trip.destination.location.lng),
                    travelMode: google.maps.TravelMode.DRIVING
                };
            }
            directionsService.route(request, function (response, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    console.log(response);
                    _this.distanceText = response.routes[0].legs[0].distance.text;
                    _this.durationText = response.routes[0].legs[0].duration.text;
                }
                else {
                    console.log("error");
                }
            });
        });
    };
    TrackingPage.ctorParameters = function () { return [
        { type: _services_driver_service__WEBPACK_IMPORTED_MODULE_3__["DriverService"] },
        { type: _services_trip_service__WEBPACK_IMPORTED_MODULE_5__["TripService"] },
        { type: _services_place_service__WEBPACK_IMPORTED_MODULE_6__["PlaceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_9__["AngularFireDatabase"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
    ]; };
    TrackingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tracking',
            template: __webpack_require__(/*! raw-loader!./tracking.page.html */ "./node_modules/raw-loader/index.js!./src/app/tracking/tracking.page.html"),
            styles: [__webpack_require__(/*! ./tracking.page.scss */ "./src/app/tracking/tracking.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_driver_service__WEBPACK_IMPORTED_MODULE_3__["DriverService"],
            _services_trip_service__WEBPACK_IMPORTED_MODULE_5__["TripService"],
            _services_place_service__WEBPACK_IMPORTED_MODULE_6__["PlaceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_9__["AngularFireDatabase"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
    ], TrackingPage);
    return TrackingPage;
}());



/***/ })

}]);
//# sourceMappingURL=tracking-tracking-module-es5.js.map