import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/user';
import { UserAuthPage } from '../user-auth/user-auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = {} as User;
  loginform:FormGroup;
  constructor(public app:UserAuthPage,
              public navCtrl: NavController,
              public navParams: NavParams,
              public afauth: AngularFireAuth,
              public formBuilder: FormBuilder) {

      this.loginform = formBuilder.group({
        email:['',Validators.compose([Validators.required,Validators.email])],
        password:['',Validators.compose([Validators.required])],
      });

  }

  async login(value:any) {
    try {
      const result = this.afauth.auth.signInWithEmailAndPassword(value.email, value.password);
      if(result) {
        this.app.navCtrl.setRoot("HomePage");
      }
    }
    catch(e) {
      console.log(e);
    }
  }

}
