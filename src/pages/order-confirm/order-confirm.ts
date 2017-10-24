import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Order, Contact } from '../../models/restaurant';

@IonicPage()
@Component({
  selector: 'page-order-confirm',
  templateUrl: 'order-confirm.html',
})
export class OrderConfirmPage {

  orders: any[];
  userLoggedin: boolean;
  orderInfo = {} as Order;
  contact = {} as Contact;
  uid: string;
  callback:any;
  totalprice:number=0;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public firebaseService: FirebaseServiceProvider,
              public afauth: AngularFireAuth) {
    this.orders = this.navParams.get('order');
    this.callback = this.navParams.get('callback');
    this.contact.contact_name = "";
    this.contact.address = "";
    this.contact.phone = "";
    if(this.orders && this.orders.length>0){
      this.orders.map( order => {
        this.totalprice+=order.food.price*order.number;
      });
    }
    //check if user loggined so taht we can get the saved contact methods
    this.afauth.authState.subscribe( data => {
      if(data && data.email && data.uid) {
        this.userLoggedin = true;
        this.uid = data.uid;
      } else {
        this.userLoggedin = false;
        this.uid = "";
      }
    });
  }

  submitOrder() {
      let order= this.orders.length>0? this.orders.map( order => {
        this.totalprice+=order.food.price*order.number;
        return order;
      }):[];
      this.orderInfo = {
        uid: this.uid,
        order: order,
        contact: this.contact,
        count: this.totalprice,
        status: "pending",
      };
     this.firebaseService.order(this.orderInfo);
     this.orders = [];
     this.backToMenu();
  }

  decrement_item(i) {
    this.orders[i].number = this.orders[i].number-1;
  }

  increment_item(i) {
    this.orders[i].number = this.orders[i].number+1;
  }

  delete_item(i) {
    this.orders.splice(i,1);
    if(this.orders.length<1) {
      this.backToMenu();
    }
  }

  backToMenu() {
    this.callback(this.orders).then( ()=> {
      this.navCtrl.pop();
    })
  }

}
