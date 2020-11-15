import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { PlaceService } from '../services/place.service';
import { SettingService } from '../services/setting.service';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../services/auth.service';
import { DealService } from '../services/deal.service';
import { DriverService } from '../services/driver.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { TripService } from '../services/trip.service';
import { AlertController, MenuController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Router } from '@angular/router';
import { DEAL_STATUS_PENDING, DEAL_STATUS_ACCEPTED, POSITION_INTERVAL, SHOW_VEHICLES_WITHIN, VEHICLE_LAST_ACTIVE_LIMIT, environment } from 'src/environments/environment.prod';
import { take } from 'rxjs/operators';
import { CommonService } from '../services/common.service';
import * as firebase from 'firebase';

declare var google: any;
declare var Stripe: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  mapId = Math.random() + 'map';
  mapHeight: number = 480;
  showModalBg: boolean = false;
  showVehicles: boolean = false;
  vehicles: any = [];
  currentVehicle: any;
  note: any = '';
  promocode: any = '';
  map: any;
  origin: any;
  destination: any;
  dropOff: Array<any> = [];
  distance: number = 0;
  duration: number = 0;
  currency: string;
  locality: any;
  paymentMethod: string = 'cash';
  activeDrivers: Array<any> = [];
  driverMarkers: Array<any> = [];
  driverTracking: any;
  locateDriver: any = false;
  drivers: any;
  user = {};
  isTrackDriverEnabled = true;
  discount: any = 0;
  startLatLng: any;
  destLatLng: any;
  dropLatLng: any;
  directionsService: any;
  directionsDisplay: any;
  bounds: any;
  cardNumber: any;

  distanceText: any = '';
  durationText: any = '';

  constructor(
    private router: Router,
    private alertCtrl: AlertController,
    private placeService: PlaceService,
    private geolocation: Geolocation,
    private chRef: ChangeDetectorRef,
    private settingService: SettingService,
    private tripService: TripService,
    private driverService: DriverService,
    private afAuth: AngularFireAuth,
    private authService: AuthService,
    private translate: TranslateService,
    private dealService: DealService,
    private common: CommonService,
    private menuCtrl: MenuController
  ) {

  }
  ionViewDidEnter() {
    this.menuCtrl.enable(true);
    this.afAuth.authState.subscribe(authData => {
      if (authData) {
        this.user = this.authService.getUserData();
      }
    });
    //console.log("calling");
    this.origin = this.tripService.getOrigin();
    this.destination = this.tripService.getDestination();
    this.dropOff = [];
    this.dropOff = this.tripService.getDropoff();
    //console.log('THE DROP' + JSON.stringify(this.dropOff));
    this.loadMap();
  }

  ngOnInit() {
    //console.log("calling");
  }

  ionViewWillLeave() {
    clearInterval(this.driverTracking);
  }

  // get current payment method from service
  getPaymentMethod() {
    this.paymentMethod = this.tripService.getPaymentMethod()
    return this.paymentMethod;
  }

  choosePaymentMethod1() {
    this.alertCtrl.create({
      header: "Choose Payments",
      inputs: [
        { type: 'radio', label: "Cash", value: 'cash' },
        { type: 'radio', label: "Card", value: 'card' }
      ],
      buttons: [{
        text: "Cancel"
      }, {
        text: "Choose",
        handler: (data) => {
          console.log(data);
          if (data == 'card') {
            this.authService.getCardSetting().valueChanges().pipe(take(1)).subscribe((res: any) => {
              if (res != null) {
                this.tripService.setPaymentMethod(data);
                this.paymentMethod = data;

                const exp = res.exp.split('/');
                Stripe.card.createToken({
                  number: res.number,
                  exp_month: exp[0],
                  exp_year: exp[1],
                  cvc: res.cvv
                }, (status: number, response: any) => {
                  if (status == 200) {
                    console.log("Card Ready")
                    this.authService.updateCardSetting(res.number, res.exp, res.cvv, response.id);
                  } else {
                    this.common.showToast(response.error.message);
                  }
                });
              }
              else
                this.common.showAlert("Invalid Card")
            })
          }
          else if (data == 'cash') {
            this.paymentMethod = data;
            this.tripService.setPaymentMethod(data);
          }
        }
      }]
    }).then(res => res.present());
  }

  // toggle active vehicle
  chooseVehicle(index) {
    for (var i = 0; i < this.vehicles.length; i++) {
      this.vehicles[i].active = (i == index);
      // choose this vehicle type
      if (i == index) {
        this.tripService.setVehicle(this.vehicles[i]);
        this.currentVehicle = this.vehicles[i];
      }
    }
    // start tracking new driver type
    this.trackDrivers();
    this.toggleVehicles();
  }

  loadMap() {
    // this.common.showLoader("Loading..");

    // get current location
    return this.geolocation.getCurrentPosition().then((resp) => {

      if (this.origin) {
        this.startLatLng = new google.maps.LatLng(this.origin.location.lat, this.origin.location.lng);
      } else {
        this.startLatLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude); 
      }

      let directionsDisplay;
      let directionsService = new google.maps.DirectionsService();
      directionsDisplay = new google.maps.DirectionsRenderer({
        polylineOptions: {
          strokeColor: 'black'
        }
      });

      let mapOptions: any = environment.mapOptions;
      mapOptions.center = this.startLatLng;
      mapOptions.mapTypeId = google.maps.MapTypeId.ROADMAP;

      this.map = new google.maps.Map(document.getElementById(this.mapId), mapOptions);

      let mapx = this.map;
      directionsDisplay.setMap(mapx);

      // find map center address
      let geocoder = new google.maps.Geocoder();
      geocoder.geocode({ 'latLng': this.map.getCenter() }, (results, status) => {
        if (status == google.maps.GeocoderStatus.OK) {
          if (!this.origin) {
            // set map center as origin
            this.origin = this.placeService.formatAddress(results[0]);
            this.tripService.setOrigin(this.origin.vicinity, this.origin.location.lat, this.origin.location.lng);
            this.setOrigin();
            this.chRef.detectChanges();
          } else {
            this.setOrigin();
          }

          // save locality
          let locality = this.placeService.setLocalityFromGeocoder(results);
          console.log('locality', locality);
          // load list vehicles
          this.settingService.getPrices().valueChanges().subscribe((snapshot: any) => {
            this.vehicles = [];
            console.log(snapshot);
            let obj = snapshot[locality] ? snapshot[locality] : snapshot.default;
            console.log(obj)
            this.currency = obj.currency;
            this.tripService.setCurrency(this.currency);

            // calculate price
            Object.keys(obj.vehicles).forEach(id => {
              obj.vehicles[id].id = id;
              this.vehicles.push(obj.vehicles[id]);
            });

            console.log(this.vehicles);

            // calculate distance between origin adn destination
            if (this.destination) {

              directionsService.route(request, (result, status) => {

                if (status == google.maps.DirectionsStatus.OK && result.routes.length != 0) {
                  console.log(result);
                  // this.distance = result.routes[0].legs[0].distance.value / 1000;
                  // this.distanceText = result.routes[0].legs[0].distance.text;
                  // this.durationText = result.routes[0].legs[0].duration.text;
                  //console.log(this.distance);

                  var totalDist = 0;
                  var totalTime = 0;
                  var myroute = result.routes[0];

                  for (var i = 0; i < myroute.legs.length; i++) {
                    totalDist += myroute.legs[i].distance.value;
                    totalTime += myroute.legs[i].duration.value;
                  }

                  this.distance = totalDist / 1000;
                  totalDist = totalDist / 1000;
                  this.distanceText = totalDist.toFixed(1) + ' km';
                  totalTime = totalTime / 60;
                  if((totalTime / 60) > 1) {
                    var totalhour = Math.trunc(totalTime / 60);
                    var totalMins = Math.trunc(totalTime % 60);
                    var hourText = totalhour > 1 ? totalhour + ' hours' : totalhour + ' hour';
                    var minsText = totalMins > 1 ? totalMins + ' mins' : totalMins + ' min';
                    this.durationText = hourText + ' ' + minsText;
                  } else {
                    var totalMins = Math.trunc(totalTime % 60);
                    this.durationText = totalTime > 1 ? totalMins + ' mins' : totalMins + ' min';
                  }

                  for (let i = 0; i < this.vehicles.length; i++) {

                    // Calculating base fare if distance between base km
                    if (this.distance <= parseInt(this.vehicles[i].base_km)) {
                      let fee = parseFloat((this.distance * parseInt(this.vehicles[i].base_fare)).toFixed(2));
                      this.vehicles[i].fee = fee;
                      this.vehicles[i].fee_taxed = parseFloat((fee + (fee * (parseInt(this.vehicles[i].tax) / 100))).toFixed(2))
                    }

                    // Calculating base fare if distance above base km
                    else if (this.distance > parseInt(this.vehicles[i].base_km)) {
                      let extraKm = this.distance - parseInt(this.vehicles[i].base_km);
                      let fee = parseFloat(((parseInt(this.vehicles[i].base_km) * parseInt(this.vehicles[i].base_fare)) + (extraKm * parseInt(this.vehicles[i].per_km))).toFixed(2))
                      this.vehicles[i].fee = fee;
                      this.vehicles[i].fee_taxed = parseFloat((fee + (fee * (parseInt(this.vehicles[i].tax) / 100))).toFixed(2))
                    }

                    if (this.vehicles[i].commission_type == 'percentage') {
                      this.vehicles[i].commission = parseFloat((this.vehicles[i].fee * (parseInt(this.vehicles[i].commission_value) / 100)).toFixed(2));
                    }
                    else {
                      this.vehicles[i].commission = parseFloat(parseFloat(this.vehicles[i].commission_value).toFixed(2));
                    }
                  }

                  console.log('TOTAL DISTANCE' + this.distanceText);
                  console.log('TOTAL DURATION' + this.durationText);
                } else {
                  console.log("error");
                }
              });

            }

            // set first device as default
            this.vehicles[0].active = true;
            this.currentVehicle = this.vehicles[0];

            this.locality = locality;
            if (this.isTrackDriverEnabled)
              this.trackDrivers();
          });
        }
      });

      // add destination to map
      if (this.destination) {
        this.destLatLng = new google.maps.LatLng(this.destination.location.lat, this.destination.location.lng);
        var bounds = new google.maps.LatLngBounds();
        bounds.extend(this.startLatLng);
        bounds.extend(this.destLatLng);

        mapx.fitBounds(bounds);
        
        if (this.dropOff.length > 0) {

          let finalWaypoints = [];
          this.dropOff.forEach(function(item) {
            finalWaypoints.push({location: item.location});
          });
          console.log(`THE DROP OFF ${JSON.stringify(finalWaypoints)}`)

          var request: any = {
            origin: this.startLatLng,
            destination: this.destLatLng,
            waypoints: finalWaypoints,
            travelMode: google.maps.TravelMode.DRIVING
          };
        } else {
          // tslint:disable-next-line: prefer-const
          var request: any = {
            origin: this.startLatLng,
            destination: this.destLatLng,
            travelMode: google.maps.TravelMode.DRIVING
          };
        }
        
        directionsService.route(request, function (response, status) {
          if (status == google.maps.DirectionsStatus.OK) {
            console.log(response);
            directionsDisplay.setDirections(response);
            directionsDisplay.setMap(mapx);
          } else {
            console.log("error");
          }
        });
      }
      // this.common.hideLoader();
    }).catch((error) => {
      // this.common.hideLoader();
      console.log('Error getting location', error);
    });
  }
  showPromoPopup() {
    this.alertCtrl.create({
      header: 'Enter Promo code',
      inputs: [
        { name: 'promocode', placeholder: 'Enter Promo Code' }
      ],
      buttons: [
        { text: 'Cancel' },
        {
          text: 'Apply',
          handler: (data) => {
            console.log(data.promocode);
            //verifying promocode
            firebase.database().ref('promocodes').orderByChild("code").equalTo(data.promocode).once('value', promocodes => {
              console.log(promocodes.val());
              let tmp: any = [];
              promocodes.forEach(promo => {
                tmp.push({ key: promo.key, ...promo.val() })
                return false;
              })
              tmp = tmp[0];
              console.log(tmp)
              if (promocodes.val() != null || promocodes.val() != undefined) {
                this.promocode = tmp.code;
                this.discount = tmp.discount;
                this.tripService.setPromo(tmp.code);
                this.tripService.setDiscount(tmp.discount);
                console.log('promo applied', tmp.code, tmp.discount);
                this.common.showToast("Promo Applied");
              }
              else {
                this.common.showToast("Invalid Promocode");
              }
            }, err => console.log(err));
          }
        }
      ]
    }).then(prompt => prompt.present());

  }


  // Show note popup when click to 'Notes to user'
  showNotePopup() {
    this.alertCtrl.create({
      header: 'Notes to user',
      message: "",
      inputs: [
        { name: 'note', placeholder: 'Note' },
      ],
      buttons: [
        { text: 'Cancel' },
        {
          text: 'Save',
          handler: data => {
            this.note = data;
            this.tripService.setNote(data);
            console.log('Saved clicked');
          }
        }
      ]
    }).then(prompt => prompt.present());

  };

  // go to next view when the 'Book' button is clicked
  book() {

    this.locateDriver = true;


    // store detail
    this.tripService.setAvailableDrivers(this.activeDrivers);
    this.tripService.setDistance(this.distance);
    this.tripService.setFee(this.currentVehicle.fee);
    this.tripService.setRawFee(this.currentVehicle.fee);
    this.tripService.setFeeTaxed(this.currentVehicle.fee_taxed);
    this.tripService.setIcon(this.currentVehicle.icon);
    this.tripService.setNote(this.note);
    this.tripService.setPromo(this.promocode);
    this.tripService.setDiscount(this.discount);
    this.tripService.setTax(this.currentVehicle.tax);
    this.tripService.setCommissionType(this.currentVehicle.commission_type)
    this.tripService.setCommissionValue(this.currentVehicle.commission_value)
    this.tripService.setCommission(this.currentVehicle.commission)
    // this.tripService.setPaymentMethod('');
    this.drivers = this.tripService.getAvailableDrivers();
    // sort by driver distance and rating
    this.drivers = this.dealService.sortDriversList(this.drivers);

    //Applying discount
    console.log(this.tripService.getDiscount());
    if (this.tripService.getDiscount() != 0) {
      console.log(this.tripService.getFee());

      let feeAfterDiscount = this.tripService.getFee() - (this.tripService.getFee() * this.tripService.getDiscount() / 100);
      this.tripService.setFee(parseFloat(feeAfterDiscount.toFixed(2)));

      console.log(feeAfterDiscount.toFixed(2));

      let feeTaxedAfterDiscount = feeAfterDiscount + (feeAfterDiscount * (this.tripService.getTax() / 100))

      this.tripService.setFeeTaxed(parseFloat(feeTaxedAfterDiscount.toFixed(2)));
      console.log(feeTaxedAfterDiscount.toFixed(2));
    }


    if (this.drivers) {
      this.makeDeal(0);
    }

  }

  makeDeal(index) {
    let driver = this.drivers[index];
    let dealAccepted = false;

    if (driver) {
      driver.status = 'Bidding';
      this.dealService.getDriverDeal(driver.key).valueChanges().pipe(take(1)).subscribe((snapshot: any) => {
        // if user is available
        console.log(snapshot);
        if (snapshot == null) {
          // create a record
          console.log(snapshot);

          this.dealService.makeDeal(
            driver.key,
            this.tripService.getOrigin(),
            this.tripService.getDestination(),
            this.tripService.getDropoff(),
            this.tripService.getDistance(),
            this.tripService.getFee(),
            this.tripService.getCurrency(),
            this.tripService.getNote(),
            this.tripService.getPaymentMethod(),
            this.tripService.getPromo(),
            this.tripService.getDiscount(),
            this.tripService.getTax(),
            this.tripService.getFeeTaxed(),
            this.tripService.getRawFee(),
            this.tripService.getCommissionType(),
            this.tripService.getCommissionValue(),
            this.tripService.getCommission(),
          ).then(() => {
            let sub = this.dealService.getDriverDeal(driver.key).valueChanges().subscribe((snap: any) => {
              // if record doesn't exist or is accepted
              if (snap === null || snap.status != DEAL_STATUS_PENDING) {
                sub.unsubscribe();

                // if deal has been cancelled
                if (snap === null) {
                  this.nextDriver(index);
                } else if (snap.status == DEAL_STATUS_ACCEPTED) {
                  // if deal is accepted
                  console.log('accepted', snap.tripId);
                  dealAccepted = true;
                  this.locateDriver = false;

                  this.drivers = [];
                  this.tripService.setId(snap.tripId);
                  // go to user page
                  this.router.navigateByUrl('tracking');
                }
              }
            });
          });
        } else {
          this.nextDriver(index);
        }
      });
    } else {
      // show error & try again button
      console.log('No user found');
      this.locateDriver = false;
      this.common.showAlert("No Active Driver Found or driver is too long");
    }
  }

  // make deal to next driver
  nextDriver(index) {
    this.drivers.splice(index, 1);
    this.makeDeal(index);
  }

  // choose origin place
  chooseOrigin() {

    this.router.navigate(['map'], {
      queryParams: {
        type: 'origin'
      }
    });
  }

  // choose destination place
  chooseDestination() {
    this.router.navigate(['map'], {
      queryParams: {
        type: 'destination'
      }
    });
  }

  // choose dropoff place
  chooseDropOff(dropOffIndex) {
    this.router.navigate(['map'], {
      queryParams: {
        type: 'dropoff',
        dropOffIndex: dropOffIndex
      }
    });
  }

  removeDropOff(dropOffIndex) {
    this.dropOff = this.tripService.removeDropOff(dropOffIndex);
    this.loadMap();
  }

  choosePaymentMethod() {
    this.router.navigateByUrl('/payments');
  }

  // add origin marker to map
  setOrigin() {
    // add origin and destination marker
    let latLng = new google.maps.LatLng(this.origin.location.lat, this.origin.location.lng);
    let startMarker = new google.maps.Marker({ map: this.map, position: latLng });
    startMarker.setMap(this.map);
    if (this.destination)
      startMarker.setMap(null);
    // set map center to origin address
    this.map.setCenter(latLng);
  }

  // show or hide vehicles
  toggleVehicles() {
    this.showVehicles = !this.showVehicles;
    this.showModalBg = (this.showVehicles == true);
  }

  // track drivers
  trackDrivers() {
    this.showDriverOnMap(this.locality);
    clearInterval(this.driverTracking);

    this.driverTracking = setInterval(() => {
      this.showDriverOnMap(this.locality);
    }, POSITION_INTERVAL);
  }
  // show drivers on map
  showDriverOnMap(locality) {

    console.log("Searching: " + this.currentVehicle.id + " under " + locality);

    this.driverService.getActiveDriver(locality, this.currentVehicle.id).valueChanges().pipe(take(1)).subscribe((snapshot: any) => {

      // clear vehicles
      this.clearDrivers();
      if (snapshot != null) {
        console.log(snapshot.length + " Drivers");
        // only show near vehicle
        snapshot.forEach(vehicle => {

          let distance = this.placeService.calcCrow(vehicle.lat, vehicle.lng, this.origin.location.lat, this.origin.location.lng);

          console.log("Distance:" + (distance < SHOW_VEHICLES_WITHIN) + " Last Active:" + (vehicle.last_active < VEHICLE_LAST_ACTIVE_LIMIT));

          // checking last active time and distance
          if (distance < SHOW_VEHICLES_WITHIN && Date.now() - vehicle.last_active < VEHICLE_LAST_ACTIVE_LIMIT) {
            // create or update
            let latLng = new google.maps.LatLng(vehicle.lat, vehicle.lng);

            let marker = new google.maps.Marker({
              map: this.map,
              position: latLng,
              icon: {
                url: this.currentVehicle.map_icon,
                size: new google.maps.Size(32, 32),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(16, 16),
                scaledSize: new google.maps.Size(32, 32)
              },
            });

            // add vehicle and marker to the list
            vehicle.distance = distance;
            this.driverMarkers.push(marker);
            this.activeDrivers.push(vehicle);
          } else {
            console.log('This vehicle is too far');
          }

        });
      }
    });
  }

  // clear expired drivers on the map
  clearDrivers() {
    this.activeDrivers = [];
    this.driverMarkers.forEach((vehicle) => {
      vehicle.setMap(null);
    });
  }
}
