import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Order } from '../../models/restaurant';

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {

  ordersFromFirebase: AngularFireList<Order>;
  uid:string;
  user_orders:Order[] = [];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public firebaseService: FirebaseServiceProvider,
              private afauth: AngularFireAuth) {
      this.afauth.authState.subscribe( data => {
        if(data && data.email && data.uid) {
          console.log(data.uid);
          this.uid=data.uid;
        } else {
          console.log("no user login");
          this.navCtrl.setRoot("HomePage");
          this.uid="";
        }
      });

      this.ordersFromFirebase = this.firebaseService.getOrders();
      this.ordersFromFirebase.valueChanges<Order>().subscribe( orders => {
        orders.map( order => {
          if(order.uid == this.uid) {
            this.user_orders.push(order);
          }
        });
      });
      console.log(this.user_orders);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
  }

}
