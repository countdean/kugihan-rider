import { Component, OnInit } from '@angular/core';
import { TripService } from '../services/trip.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from '../services/common.service';
import { AlertController, NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.page.html',
  styleUrls: ['./rating.page.scss'],
})
export class RatingPage implements OnInit {
  trip: any = {};
  driver: any = {};
  rating: any = 5;
  feedback: any = {}

  constructor(
    private tripService: TripService,
    private common: CommonService,
    private navParams: NavParams,
    private modalCtrl: ModalController
  ) {
    console.log(this.navParams.data);
    this.driver = this.navParams.get('driver');
    this.trip = this.navParams.get('trip');
  }

  ngOnInit() {
  }

  onRateChange(event) {
    console.log(event);
    this.rating = event;
  }

  rateTrip() {
    console.log(this.rating);
    this.tripService.rateTrip(this.trip.key, this.rating, this.feedback).then(() => {
      this.common.showToast("Thanks for your rating");
      this.tripService.finishTrip(this.trip.key);
      this.modalCtrl.dismiss();
    }).catch((err) => {
      console.log(err)
      this.common.showToast("Something went wrong");
      this.modalCtrl.dismiss();
    });
  }

  skip() {
    this.tripService.finishTrip(this.trip.key);
    this.modalCtrl.dismiss();
  }


}
