import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/user';

@IonicPage()
@Component({
  selector: 'page-user-auth',
  templateUrl: 'user-auth.html',
})
export class UserAuthPage {

  tab1:any = "LoginPage";
  tab2:any = "SignupPage";
  signupform:FormGroup;
  loginform:FormGroup;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public afauth: AngularFireAuth,
              public firebaseService:FirebaseServiceProvider,
              public formBuilder: FormBuilder) {
    this.signupform = formBuilder.group({
      email:['',Validators.compose([Validators.required,Validators.email])],
      password:['',Validators.compose([Validators.required])],
      confirm_password:['',Validators.compose([Validators.required])],
      username:['',Validators.compose([Validators.required])],
    });
    this.loginform = formBuilder.group({
      email:['',Validators.compose([Validators.required,Validators.email])],
      password:['',Validators.compose([Validators.required])],
    });
  }

  async register(value:any) {
    if(value.password != value.confirm_password){
      console.log("not the same");
    } else {
      this.afauth.auth.createUserWithEmailAndPassword(value.email,value.password)
            .then( result => {
              this.navCtrl.setRoot("HomePage");
              console.log(result);
              let userProfile = {} as User;
              userProfile.username =value.username;
              this.firebaseService.addUserProfile(result.uid, userProfile);
            })
            .catch( error => {
              console.log(error.message);
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
            });
  }

}
