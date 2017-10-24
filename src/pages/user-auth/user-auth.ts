import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { User } from '../../models/user';

@IonicPage()
@Component({
  selector: 'page-user-auth',
  templateUrl: 'user-auth.html',
})
export class UserAuthPage {

  tab1:any = "LoginPage";
  tab2:any = "SignupPage";
  nuser = {} as User;
  registerError: string;
  user = {} as User;
  logininError: string;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public afauth: AngularFireAuth,
              public firebaseService:FirebaseServiceProvider) {
    this.registerError = "";
    this.logininError = "";
  }

  async register(user) {
    if(user.password != user.confirm_password){
      console.log("not the same");
    } else {
      this.afauth.auth.createUserWithEmailAndPassword(user.email,user.password)
            .then( result => {
              this.navCtrl.setRoot("HomePage");
              console.log(result);
              let userProfile = {} as User;
              userProfile.username =this.nuser.username;
              this.firebaseService.addUserProfile(result.uid, userProfile);
            })
            .catch( error => {
              console.log(error.message);
              this.registerError = error.message;
            });
    }
  }

  async login(user) {
    this.afauth.auth.signInWithEmailAndPassword(user.email, user.password)
            .then( result => {
              this.navCtrl.setRoot("HomePage");
              console.log(result);
            })
            .catch( error => {
              console.log(error.message);
              this.logininError = error.message;
            });
  }

}
