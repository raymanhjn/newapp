import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../models/user';
import { UserAuthPage } from '../user-auth/user-auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
    user = {} as User;
  constructor(public app:UserAuthPage,public navCtrl: NavController, public navParams: NavParams,public afauth: AngularFireAuth) {

  }

  async login(user) {
    try {
      const result = this.afauth.auth.signInWithEmailAndPassword(user.email, user.password);
      if(result) {
        this.app.navCtrl.setRoot("HomePage");
      }
    }
    catch(e) {
      console.log(e);
    }
  }

}
