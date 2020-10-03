import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: any = {};
  constructor(
    private authService: AuthService,
    private common: CommonService,
    private router: Router,
    private afStorage: AngularFireStorage,
    private platform: Platform
  ) { }

  ngOnInit() {
    this.authService.getUser(this.authService.getUserData().uid).snapshotChanges().pipe(take(1)).subscribe((snapshot: any) => {

      this.user = { uid: snapshot.key, ...snapshot.payload.val() };
      this.user.isEmailVerified = this.authService.getUserData().emailVerified;
      console.log(this.user);
    });
  }

  // save user info
  save() {
    this.authService.updateUserProfile(this.user);
    this.common.showToast("Updated");
  }

  // choose file for upload
  chooseFile() {
    document.getElementById('avatar').click();
  }

  upload() {
    // Create a root reference
    this.common.showLoader();

    for (let selectedFile of [(<HTMLInputElement>document.getElementById('avatar')).files[0]]) {
      let path = '/users/' + Date.now() + `_${selectedFile.name}`;
      let ref = this.afStorage.ref(path)
      ref.put(selectedFile).then(() => {
        ref.getDownloadURL().subscribe(data => {
          this.user.photoURL = data;
          this.common.hideLoader()
        });
      }).catch(err => {
        this.common.hideLoader();
        console.log(err)
      });

    }
  }

  logout() {
    this.authService.logout().then(() => {
      localStorage.clear();
      this.router.navigateByUrl('/login', { skipLocationChange: true, replaceUrl: true });
    });
  }

}
