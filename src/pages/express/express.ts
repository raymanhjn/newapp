import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Express } from '../../models/express';
@IonicPage()
@Component({
  selector: 'page-express',
  templateUrl: 'express.html',
})
export class ExpressPage {
  express= {} as Express;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  submitOrder(express) {
    console.log(express);
  }
}
