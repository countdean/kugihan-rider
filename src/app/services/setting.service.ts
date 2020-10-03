import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  constructor(private db: AngularFireDatabase) { }

  getPrices() {
    return this.db.object('master_settings/prices');
  }
}
