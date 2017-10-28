import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database';
import { Order } from '../../models/restaurant';
import { User } from '../../models/user';
import { Express } from '../../models/express';

@Injectable()
export class FirebaseServiceProvider {

  constructor(public afd: AngularFireDatabase) { }

  //restaurant menu
  getFoods() {
    return this.afd.list('/foods/') ;
  }

  addFood(food) {
    this.afd.list('/foods/').push(food);
  }

  //food order
  getOrders() {
    return this.afd.list<Order>("/orders/");
  }

  order(order) {
    this.afd.list<Order>('/orders/').push(order);
  }


  //express order
  expressOrder(eOrder: Express) {
    this.afd.list('/express/').push(eOrder);
  }

  tracking(id) {
    console.log(id);
  }

  // user authentication
  addUserProfile(uid,user) {
    this.afd.list<User>('/user/'+uid).push(user);
  }

  getUserProfile(uid){
    return this.afd.list<User>("/user/"+uid);
  }

}
