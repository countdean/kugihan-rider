import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RatingPage } from './rating.page';
import { IonicRatingModule } from 'ionic-rating';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '',
    component: RatingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicRatingModule,
    TranslateModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RatingPage]
})
export class RatingPageModule { }
