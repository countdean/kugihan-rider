import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { DEFAULT_AVATAR } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any;

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) { }

  // get current user data from firebase
  getUserData() {
    return this.afAuth.auth.currentUser;
  }

  // get passenger by id
  getUser(id) {
    return this.db.object('passengers/' + id);
  }

  // login by email and password
  login(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  resetPassword(email) {
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }

  sendVerificationEmail() {
    return this.afAuth.auth.currentUser.sendEmailVerification();
  }

  logout() {
    return this.afAuth.auth.signOut();
  }

  // register new account
  register(email, password, name, phoneNumber) {
    return Observable.create(observer => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, password).then((authData: any) => {

        let userInfo: any = {
          uid: authData.user.uid,
          name: name,
          phoneNumber: phoneNumber,
          isPhoneVerified: false,
          email: email,
          createdAt: Date.now()
        };
        this.updateUserProfile(userInfo);
        observer.next();
      }).catch((error: any) => {
        if (error) {
          observer.error(error);
        }
      });
    });
  }

  // update user display name and photo
  updateUserProfile(user) {
    console.log(user);
    let name = user.name ? user.name : user.email;
    let photoUrl = user.photoURL ? user.photoURL : DEFAULT_AVATAR;

    this.getUserData().updateProfile({
      displayName: name,
      photoURL: photoUrl
    });

    // create or update passenger
    this.db.object('passengers/' + user.uid).update({
      name: name,
      photoURL: photoUrl,
      email: user.email,
      phoneNumber: user.phoneNumber ? user.phoneNumber : '',
      isPhoneVerified: user.isPhoneVerified,
      createdAt: Date.now()
    })
  }

  // create new user if not exist
  createUserIfNotExist(user) {
    this.getUser(user.uid).valueChanges().pipe(take(1)).subscribe((snapshot: any) => {
      if (snapshot === null) {
        this.updateUserProfile(user);
      }
    });
  }

  // update card setting
  updateCardSetting(number, exp, cvv, token) {
    const user = this.getUserData();
    this.db.object('passengers/' + user.uid + '/card').update({
      number: number,
      exp: exp,
      cvv: cvv,
      token: token
    })
  }

  // get card setting
  getCardSetting() {
    const user = this.getUserData();
    return this.db.object('passengers/' + user.uid + '/card');
  }

}
