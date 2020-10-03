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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _map_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./map.page */ "./src/app/map/map.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








const routes = [
    {
        path: '',
        component: _map_page__WEBPACK_IMPORTED_MODULE_6__["MapPage"]
    }
];
let MapPageModule = class MapPageModule {
};
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



/***/ }),

/***/ "./src/app/map/map.page.scss":
/*!***********************************!*\
  !*** ./src/app/map/map.page.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#map {\n  height: 100%;\n}\n\n.marker {\n  position: fixed;\n  z-index: 1000;\n  top: 45%;\n  left: 45%;\n}\n\n.locationinput {\n  background: #eee;\n  border: 0;\n  outline: 0;\n  width: 100%;\n  padding: 0.5rem;\n  color: #333;\n  margin: 4px;\n  font-size: 14px;\n  border-radius: 4px;\n}\n\n.place-text {\n  margin: 4px 0px;\n  font-size: 12px;\n  text-align: center;\n  color: #777;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwL0Q6XFxLVUdJSEFOIEVYUFJFU1NcXFNZU1RFTSAyMDIwXFxLdWdpaGFuIEV4cHJlc3NcXEt1Z2loYW4gRXhwcmVzc1xca3VnaWhhbi1leHByZXNzXFxyaWRlci9zcmNcXGFwcFxcbWFwXFxtYXAucGFnZS5zY3NzIiwic3JjL2FwcC9tYXAvbWFwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSjs7QURFRTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUNDSjs7QURFRTtFQUNFLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvbWFwL21hcC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFwIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAubWFya2VyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogMTAwMDtcbiAgICB0b3A6NDUlO1xuICAgIGxlZnQ6IDQ1JTs7XG4gIH1cblxuICAubG9jYXRpb25pbnB1dHtcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAgIGJvcmRlcjowO1xuICAgIG91dGxpbmU6MDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgY29sb3I6ICMzMzM7XG4gICAgbWFyZ2luOiA0cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxuLnBsYWNlLXRleHR7XG4gIG1hcmdpbjogNHB4IDBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNzc3O1xufSIsIiNtYXAge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5tYXJrZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHRvcDogNDUlO1xuICBsZWZ0OiA0NSU7XG59XG5cbi5sb2NhdGlvbmlucHV0IHtcbiAgYmFja2dyb3VuZDogI2VlZTtcbiAgYm9yZGVyOiAwO1xuICBvdXRsaW5lOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBjb2xvcjogIzMzMztcbiAgbWFyZ2luOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4ucGxhY2UtdGV4dCB7XG4gIG1hcmdpbjogNHB4IDBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNzc3O1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_place_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/place.service */ "./src/app/services/place.service.ts");
/* harmony import */ var _services_trip_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/trip.service */ "./src/app/services/trip.service.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");







let MapPage = class MapPage {
    constructor(router, geolocation, chRef, route, placeService, tripService) {
        this.router = router;
        this.geolocation = geolocation;
        this.chRef = chRef;
        this.route = route;
        this.placeService = placeService;
        this.tripService = tripService;
    }
    ngOnInit() {
    }
    // Load map only after view is initialized
    ionViewDidEnter() {
        this.loadMap();
    }
    loadMap() {
        // set current location as map center
        this.geolocation.getCurrentPosition().then((resp) => {
            let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
            let mapOptions = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__["environment"].mapOptions;
            mapOptions.center = latLng;
            mapOptions.mapTypeId = google.maps.MapTypeId.ROADMAP;
            this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
            this.marker = new google.maps.Marker({
                map: this.map,
                position: latLng
            });
            this.marker.setMap(this.map);
            // get center's address
            this.findPlace(latLng);
            this.map.addListener('center_changed', (event) => {
                let center = this.map.getCenter();
                this.findPlace(center);
            });
        }).catch((error) => {
            console.log('Error getting location', error);
        });
        var nativeHomeInputBox = document.getElementById('searchbar');
        this.googleAutocomplete = new google.maps.places.Autocomplete(nativeHomeInputBox);
        google.maps.event.addListener(this.googleAutocomplete, 'place_changed', () => {
            this.lat = this.googleAutocomplete.getPlace().geometry.location.lat();
            this.lng = this.googleAutocomplete.getPlace().geometry.location.lng();
            this.map.panTo(new google.maps.LatLng(this.lat, this.lng));
            this.findPlace(new google.maps.LatLng(this.lat, this.lng));
        });
    }
    // find address by LatLng
    findPlace(latLng) {
        let geocoder = new google.maps.Geocoder();
        this.marker.setMap(null);
        this.marker = new google.maps.Marker({ map: this.map, position: latLng });
        this.marker.setMap(this.map);
        geocoder.geocode({ 'latLng': latLng }, (results, status) => {
            if (status == google.maps.GeocoderStatus.OK) {
                this.address = results[0];
                console.log(this.address);
                this.chRef.detectChanges();
            }
        });
    }
    // choose address and go back to home page
    selectPlace() {
        let address = this.placeService.formatAddress(this.address);
        console.log(address);
        this.route.queryParams.subscribe(data => {
            let type = data.type;
            if (type == 'origin') {
                this.tripService.setOrigin(address.vicinity, address.location.lat, address.location.lng);
            }
            else if (type == 'destination') {
                this.tripService.setDestination(address.vicinity, address.location.lat, address.location.lng);
            }
            this.router.navigateByUrl('/home');
        });
    }
};
MapPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _services_place_service__WEBPACK_IMPORTED_MODULE_2__["PlaceService"] },
    { type: _services_trip_service__WEBPACK_IMPORTED_MODULE_3__["TripService"] }
];
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



/***/ })

}]);
//# sourceMappingURL=map-map-module-es2015.js.map