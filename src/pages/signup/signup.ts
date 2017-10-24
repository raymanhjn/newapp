import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../models/user';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  nuser = {} as User;
  constructor(public navCtrl: NavController, public navParams: NavParams,public afauth: AngularFireAuth) {
  }

  async register(user) {
    try {
      const result = this.afauth.auth.createUserWithEmailAndPassword(user.email,user.password);
      console.log(result);
    }
    catch(e) {
      console.log(e);
    }
  }

}
