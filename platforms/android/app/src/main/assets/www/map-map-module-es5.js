(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["map-map-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/map/map.page.html":
/*!*************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/map/map.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <input class=\"locationinput\" type=\"text\" id=\"searchbar\" #searchbar placeholder=\"search location or drag map\" />\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"selectPlace()\">{{'DONE' | translate}}</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <p class=\"place-text\">{{ address ? address.formatted_address : '' }}</p>\n  <div #map id=\"map\"></div>\n</ion-content>"

/***/ }),

/***/ "./src/app/map/map.module.ts":
/*!***********************************!*\
  !*** ./src/app/map/map.module.ts ***!
  \***********************************/
/*! exports provided: MapPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPageModule", function() { return MapPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _map_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./map.page */ "./src/app/map/map.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var routes = [
    {
        path: '',
        component: _map_page__WEBPACK_IMPORTED_MODULE_6__["MapPage"]
    }
];
var MapPageModule = /** @class */ (function () {
    function MapPageModule() {
    }
    MapPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_map_page__WEBPACK_IMPORTED_MODULE_6__["MapPage"]]
        })
    ], MapPageModule);
    return MapPageModule;
}());



/***/ }),

/***/ "./src/app/map/map.page.scss":
/*!***********************************!*\
  !*** ./src/app/map/map.page.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#map {\n  height: 100%;\n}\n\n.marker {\n  position: fixed;\n  z-index: 1000;\n  top: 45%;\n  left: 45%;\n}\n\n.locationinput {\n  background: #eee;\n  border: 0;\n  outline: 0;\n  width: 100%;\n  padding: 0.5rem;\n  color: #333;\n  margin: 4px;\n  font-size: 14px;\n  border-radius: 4px;\n}\n\n.place-text {\n  margin: 4px 0px;\n  font-size: 12px;\n  text-align: center;\n  color: #777;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rdWdpaGFuZXhwcmVzcy9EZXNrdG9wL2t1Z2loYW4tcmlkZXIvc3JjL2FwcC9tYXAvbWFwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbWFwL21hcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7O0FERUU7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDQ0o7O0FERUU7RUFDRSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL21hcC9tYXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLm1hcmtlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDEwMDA7XG4gICAgdG9wOjQ1JTtcbiAgICBsZWZ0OiA0NSU7O1xuICB9XG5cbiAgLmxvY2F0aW9uaW5wdXR7XG4gICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICBib3JkZXI6MDtcbiAgICBvdXRsaW5lOjA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIG1hcmdpbjogNHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cbi5wbGFjZS10ZXh0e1xuICBtYXJnaW46IDRweCAwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzc3Nztcbn0iLCIjbWFwIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubWFya2VyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxMDAwO1xuICB0b3A6IDQ1JTtcbiAgbGVmdDogNDUlO1xufVxuXG4ubG9jYXRpb25pbnB1dCB7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgY29sb3I6ICMzMzM7XG4gIG1hcmdpbjogNHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLnBsYWNlLXRleHQge1xuICBtYXJnaW46IDRweCAwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzc3Nztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/map/map.page.ts":
/*!*********************************!*\
  !*** ./src/app/map/map.page.ts ***!
  \*********************************/
/*! exports provided: MapPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPage", function() { return MapPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_place_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/place.service */ "./src/app/services/place.service.ts");
/* harmony import */ var _services_trip_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/trip.service */ "./src/app/services/trip.service.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");







var MapPage = /** @class */ (function () {
    function MapPage(router, geolocation, chRef, route, placeService, tripService) {
        this.router = router;
        this.geolocation = geolocation;
        this.chRef = chRef;
        this.route = route;
        this.placeService = placeService;
        this.tripService = tripService;
    }
    MapPage.prototype.ngOnInit = function () {
    };
    // Load map only after view is initialized
    MapPage.prototype.ionViewDidEnter = function () {
        this.loadMap();
    };
    MapPage.prototype.loadMap = function () {
        var _this = this;
        // set current location as map center
        this.geolocation.getCurrentPosition().then(function (resp) {
            var latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
            var mapOptions = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__["environment"].mapOptions;
            mapOptions.center = latLng;
            mapOptions.mapTypeId = google.maps.MapTypeId.ROADMAP;
            _this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
            _this.marker = new google.maps.Marker({
                map: _this.map,
                position: latLng
            });
            _this.marker.setMap(_this.map);
            // get center's address
            _this.findPlace(latLng);
            _this.map.addListener('center_changed', function (event) {
                var center = _this.map.getCenter();
                _this.findPlace(center);
            });
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
        var nativeHomeInputBox = document.getElementById('searchbar');
        this.googleAutocomplete = new google.maps.places.Autocomplete(nativeHomeInputBox);
        google.maps.event.addListener(this.googleAutocomplete, 'place_changed', function () {
            _this.lat = _this.googleAutocomplete.getPlace().geometry.location.lat();
            _this.lng = _this.googleAutocomplete.getPlace().geometry.location.lng();
            _this.map.panTo(new google.maps.LatLng(_this.lat, _this.lng));
            _this.findPlace(new google.maps.LatLng(_this.lat, _this.lng));
        });
    };
    // find address by LatLng
    MapPage.prototype.findPlace = function (latLng) {
        var _this = this;
        var geocoder = new google.maps.Geocoder();
        this.marker.setMap(null);
        this.marker = new google.maps.Marker({ map: this.map, position: latLng });
        this.marker.setMap(this.map);
        geocoder.geocode({ 'latLng': latLng }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                _this.address = results[0];
                console.log(_this.address);
                _this.chRef.detectChanges();
            }
        });
    };
    // choose address and go back to home page
    MapPage.prototype.selectPlace = function () {
        var _this = this;
        var address = this.placeService.formatAddress(this.address);
        //console.log(address);
        this.route.queryParams.subscribe(function (data) {
            var type = data.type;
            if (type == 'origin') {
                _this.tripService.setOrigin(address.vicinity, address.location.lat, address.location.lng);
            }
            else if (type == 'destination') {
                _this.tripService.setDestination(address.vicinity, address.location.lat, address.location.lng);
            }
            else {
                _this.tripService.setDropOff(address.vicinity, address.location.lat, address.location.lng, data.dropOffIndex);
            }
            _this.router.navigateByUrl('/home');
        });
    };
    MapPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _services_place_service__WEBPACK_IMPORTED_MODULE_2__["PlaceService"] },
        { type: _services_trip_service__WEBPACK_IMPORTED_MODULE_3__["TripService"] }
    ]; };
    MapPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! raw-loader!./map.page.html */ "./node_modules/raw-loader/index.js!./src/app/map/map.page.html"),
            styles: [__webpack_require__(/*! ./map.page.scss */ "./src/app/map/map.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _services_place_service__WEBPACK_IMPORTED_MODULE_2__["PlaceService"],
            _services_trip_service__WEBPACK_IMPORTED_MODULE_3__["TripService"]])
    ], MapPage);
    return MapPage;
}());



/***/ })

}]);
//# sourceMappingURL=map-map-module-es5.js.map