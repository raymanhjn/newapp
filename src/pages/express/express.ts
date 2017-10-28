import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Express } from '../../models/express';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';


@IonicPage()
@Component({
  selector: 'page-express',
  templateUrl: 'express.html',
})
export class ExpressPage {
  expressForm:FormGroup;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public formBuilder: FormBuilder,
              public firebaseService: FirebaseServiceProvider) {

    this.expressForm = formBuilder.group({
      username:['',Validators.compose([Validators.required])],
      address:['',Validators.compose([Validators.required])],
      phone:['',Validators.compose([Validators.required])],
      item_category:['',Validators.compose([Validators.required])],
      item_weight:['',Validators.compose([Validators.required])],
      needbox:[false,],
    });
  }


  submitOrder(value: any) {
    let express = {
      username: value.username,
      address:value.address,
      phone:value.phone,
      item_category:value.item_category || "not filled",
      item_weight:value.item_weight || "not filled",
      needbox:value.needbox,
    };
    console.log(express);
    this.firebaseService.expressOrder(express);
  }
}
