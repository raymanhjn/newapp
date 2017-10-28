import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/user';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  nuser = {} as User;
  signupform:FormGroup;
  confirmed:boolean = true;
  errorMessage:string = "";
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
  }

  async register(value:any) {
    if(value.password != value.confirm_password){
      this.confirmed = false;
      console.log("not the same");
    } else {
      this.afauth.auth.createUserWithEmailAndPassword(value.email,value.password)
            .then( result => {
              let userProfile = {} as User;
              userProfile.username =value.username;
              this.firebaseService.addUserProfile(result.uid, userProfile);
              this.confirmed = true;
              this.navCtrl.parent.parent.setRoot("HomePage");
            })
            .catch( error => {
              this.errorMessage = error.message;
              console.log(error.message);
            });
    }
    // this.navCtrl.parent.parent.setRoot("HomePage");
    // console.log(this.navCtrl.parent.parent);
  }
}
