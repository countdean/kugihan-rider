import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'map', loadChildren: './map/map.module#MapPageModule' },
  { path: 'tracking', loadChildren: './tracking/tracking.module#TrackingPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'history', loadChildren: './history/history.module#HistoryPageModule' },
  { path: 'payments', loadChildren: './payments/payments.module#PaymentsPageModule' },
  { path: 'rating', loadChildren: './rating/rating.module#RatingPageModule' },
  { path: 'forget', loadChildren: './forget/forget.module#ForgetPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'rideinfo/:id', loadChildren: './rideinfo/rideinfo.module#RideinfoPageModule' },
  { path: 'notifications', loadChildren: './notifications/notifications.module#NotificationsPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
