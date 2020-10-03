import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { TripService } from '../services/trip.service';
import { take } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  trips: any = [];
  constructor(
    private common: CommonService,
    private tripService: TripService,
    private translate: TranslateService,
    private router: Router,
  ) { }

  ngOnInit() {

  }

  ionViewDidEnter() {
    this.getTrips()
  }

  getTrips() {
    this.common.showLoader();

    this.tripService.getTrips().valueChanges().pipe(take(1)).subscribe((snapshot: any) => {

      if (snapshot != null)
        this.trips = snapshot.reverse();

      this.common.hideLoader()
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
}
