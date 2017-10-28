import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { AngularFireAuth } from 'angularfire2/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Order } from '../../models/restaurant';

@IonicPage()
@Component({
  selector: 'page-order-confirm',
  templateUrl: 'order-confirm.html',
})
export class OrderConfirmPage {

  orders: any[];
  userLoggedin: boolean;
  orderInfo = {} as Order;
  uid: string;
  callback:any;
  totalprice:number=0;
  orderform: FormGroup;
  errorMessage:string="";
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public firebaseService: FirebaseServiceProvider,
              public afauth: AngularFireAuth,
              public formBuilder: FormBuilder) {
    this.orders = this.navParams.get('order');
    this.callback = this.navParams.get('callback');

    //form config
    this.orderform = formBuilder.group({
      contact_name:['',Validators.compose([Validators.required])],
      address:['',Validators.compose([Validators.required])],
      phone:['',Validators.compose([Validators.required])],
    });

    //calculate the total price
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

  submitOrder(value:any) {
    if(value.contact_name && value.address && value.phone) {
      let order = this.orders.length>0? this.orders.map( order => {
        return order;
      }):[];

      let contact = {
        contact_name: value.contact_name,
        address: value.address,
        phone: value.phone,
      }

      this.orderInfo = {
        uid: this.uid,
        order: order,
        contact: contact,
        count: this.totalprice,
        status: "pending",
      };
     this.firebaseService.order(this.orderInfo);
     this.orders = [];
     this.backToMenu();
    } else {
      this.errorMessage =" missing contact infomation ";
    }
  }

  decrement_item(i) {
    this.orders[i].number = this.orders[i].number-1;
    this.totalprice -= this.orders[i].food.price;
  }

  increment_item(i) {
    this.orders[i].number = this.orders[i].number+1;
    this.totalprice += this.orders[i].food.price;
  }

  delete_item(i) {
    this.totalprice-=this.orders[i].food.price*this.orders[i].number;
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
