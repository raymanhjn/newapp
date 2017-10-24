import { Component,Input } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { AngularFireList } from 'angularfire2/database';

import { Item } from '../../models/restaurant';

@IonicPage()
@Component({
  selector: 'page-restaurant',
  templateUrl: 'restaurant.html',
})
export class RestaurantPage {
  @Input("submenu") submenu:HTMLElement;
  foods: any[];
  orders: Item[]=[];
  totalprice:number;
  openOrder:boolean;
  foodFromFirebase: AngularFireList<any>;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public firebaseService: FirebaseServiceProvider,
    public toastCtrl: ToastController) {
    this.foodFromFirebase = this.firebaseService.getFoods();
    this.foodFromFirebase.valueChanges().subscribe( data => {
      this.foods = data;
    } );
    this.totalprice = 20;
    this.openOrder = false;
  }

  addToOrder(id) {
    let orderFoods = this.orders.map( order=> {
      return order.food;
    })

    if(orderFoods.indexOf(this.foods[id]) == -1){
      orderFoods.push(this.foods[id]);
      this.orders.push({
        food:this.foods[id],
        number: 1,
      });
    } else {
      console.log("it has already been added into order");
    }
  }

  openOrderTrigger(event) {
    this.openOrder = !this.openOrder;
  }

  //confirm without toast
  confirmOrder(orderToCheck) {
    let getData = (backOrders) => {
      return new Promise((resolve, reject) => {
        this.orders = backOrders;
        resolve();
      })
    };
      this.navCtrl.push("OrderConfirmPage",{
        order:orderToCheck,
        callback: getData,
      });
  }


  //confirm with toast
  confirmOrderSmall(orderToCheck) {
    if(orderToCheck && orderToCheck.length>0){
      this.confirmOrder(orderToCheck);
    } else {
      let toast = this.toastCtrl.create({
        message: 'Please order some food first',
        duration: 2000,
        position: 'top'
      });
      toast.present();
    }
  }

  decrement_item(i) {
    this.orders[i].number = this.orders[i].number-1;
  }

  increment_item(i) {
    this.orders[i].number = this.orders[i].number+1;
  }

  delete_item(i) {
    this.orders.splice(i,1);
  }

  delete_allitems() {
    this.orders = [];
  }
}
