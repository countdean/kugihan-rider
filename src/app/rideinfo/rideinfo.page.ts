import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TripService } from '../services/trip.service';
import { DriverService } from '../services/driver.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-rideinfo',
  templateUrl: './rideinfo.page.html',
  styleUrls: ['./rideinfo.page.scss'],
})
export class RideinfoPage implements OnInit {

  tridId: any;
  trip: any = {};
  driver: any = {};
  discount;
  tax;
  constructor(
    private route: ActivatedRoute,
    private tripService: TripService,
    private driverService: DriverService
  ) {
    this.tridId = this.route.snapshot.paramMap.get('id');
    console.log(this.tridId);
  }

  ngOnInit() {
    this.tripService.getTrip(this.tridId).valueChanges().pipe(take(1)).subscribe(snap => {

      this.trip = snap;
      console.log(this.trip);
      this.discount = (this.trip.rawfee * (this.trip.discount / 100)).toFixed(2)
      this.tax = (this.trip.fee * (this.trip.tax / 100)).toFixed(2);

      this.driverService.getDriver(this.trip.driverId).valueChanges().pipe(take(1)).subscribe(snap => {
        this.driver = snap;
      })
    })
  }


}
