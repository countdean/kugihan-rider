import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { CommonService } from '../services/common.service';



@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  notifications: any = [];

  constructor(
    private db: AngularFireDatabase,
    private cs: CommonService,
    private afAuth: AngularFireAuth,

  ) { }

  ngOnInit() {
  }


  ionViewDidEnter() {
    this.cs.showLoader();

    this.db.list('notifications').snapshotChanges().subscribe((snap: any) => {

      if (snap != null) {
        let tmp = [];
        snap.forEach(n => {
          if (n.payload.val().type == 'riders' || n.payload.val().type == 'both')
            tmp.push({ key: n.key, ...n.payload.val() });
          return false;
        })
        this.notifications = tmp.reverse();
      }

      this.cs.hideLoader();
    });
  }

}
