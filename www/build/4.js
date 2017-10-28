webpackJsonp([4],{

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantPageModule", function() { return RestaurantPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__restaurant__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__ = __webpack_require__(281);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RestaurantPageModule = (function () {
    function RestaurantPageModule() {
    }
    return RestaurantPageModule;
}());
RestaurantPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__restaurant__["a" /* RestaurantPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__["a" /* DirectivesModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__restaurant__["a" /* RestaurantPage */]),
        ],
    })
], RestaurantPageModule);

//# sourceMappingURL=restaurant.module.js.map

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__ = __webpack_require__(138);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RestaurantPage = (function () {
    function RestaurantPage(navCtrl, navParams, firebaseService, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebaseService = firebaseService;
        this.toastCtrl = toastCtrl;
        this.orders = [];
        this.totalprice = 0;
        this.foodFromFirebase = this.firebaseService.getFoods();
        this.foodFromFirebase.valueChanges().subscribe(function (data) {
            _this.foods = data;
        });
        this.openOrder = false;
    }
    RestaurantPage.prototype.addToOrder = function (id) {
        var orderFoods = this.orders.map(function (order) {
            return order.food;
        });
        if (orderFoods.indexOf(this.foods[id]) == -1) {
            orderFoods.push(this.foods[id]);
            this.totalprice += this.foods[id].price;
            this.orders.push({
                food: this.foods[id],
                number: 1,
            });
        }
        else {
            console.log("it has already been added into order");
        }
    };
    RestaurantPage.prototype.openOrderTrigger = function (event) {
        this.openOrder = !this.openOrder;
    };
    //confirm without toast
    RestaurantPage.prototype.confirmOrder = function (orderToCheck) {
        var _this = this;
        var getData = function (backOrders) {
            return new Promise(function (resolve, reject) {
                _this.orders = backOrders;
                _this.totalprice = 0;
                _this.orders.map(function (order) {
                    _this.totalprice += order.food.price * order.number;
                });
                resolve();
            });
        };
        this.navCtrl.push("OrderConfirmPage", {
            order: orderToCheck,
            callback: getData,
        });
    };
    //confirm with toast
    RestaurantPage.prototype.confirmOrderSmall = function (orderToCheck) {
        if (orderToCheck && orderToCheck.length > 0) {
            this.confirmOrder(orderToCheck);
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Please order some food first',
                duration: 2000,
                position: 'top'
            });
            toast.present();
        }
    };
    RestaurantPage.prototype.decrement_item = function (i) {
        this.orders[i].number = this.orders[i].number - 1;
        this.totalprice -= this.orders[i].food.price;
    };
    RestaurantPage.prototype.increment_item = function (i) {
        this.orders[i].number = this.orders[i].number + 1;
        this.totalprice += this.orders[i].food.price;
    };
    RestaurantPage.prototype.delete_item = function (i) {
        this.totalprice -= this.orders[i].food.price * this.orders[i].number;
        this.orders.splice(i, 1);
    };
    RestaurantPage.prototype.delete_allitems = function () {
        this.orders = [];
        this.totalprice = 0;
    };
    return RestaurantPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])("submenu"),
    __metadata("design:type", HTMLElement)
], RestaurantPage.prototype, "submenu", void 0);
RestaurantPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-restaurant',template:/*ion-inline-start:"E:\front-end\newapp\src\pages\restaurant\restaurant.html"*/'<ion-header #head>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509053141&di=d9bd16d36b796a88ce0c94880fb2eeec&imgtype=jpg&er=1&src=http%3A%2F%2Fphotocdn.sohu.com%2F20151107%2Fmp40135619_1446862710873_18.jpg" />\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content hide-header [head]="head">\n  <div class="resguide hidesm">\n    <div class="container">\n      <div class="res-info">\n        <!-- <img src="./chihuo.jpg" /> -->\n        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509053141&di=d9bd16d36b796a88ce0c94880fb2eeec&imgtype=jpg&er=1&src=http%3A%2F%2Fphotocdn.sohu.com%2F20151107%2Fmp40135619_1446862710873_18.jpg" />\n        <h1>老饕煮公</h1>\n      </div>\n      <div class="res-service">service</div>\n    </div>\n  </div>\n  <ion-grid>\n    <ion-row>\n      <!-- Menu -->\n      <ion-col col-12 col-lg-8 class="menu">\n        <h1 class="hidesm">Menu</h1>\n        <ion-grid>\n          <ion-row >\n            <ion-col col-6 col-md-4 col-xl-3 *ngFor="let food of foods;let i = index">\n              <ion-card>\n                <img src="{{food.image}}"/>\n                <ion-card-content>\n                  <ion-card-title>\n                    {{food.name}}\n                  </ion-card-title>\n                  <ion-row no-padding>\n                    <ion-col col-xl-4 class="price">{{food.price}}</ion-col>\n                    <ion-col col-xl-8>\n                      <ion-icon name="md-add-circle" (click)="addToOrder(i)"></ion-icon>\n                      <ion-icon name="md-heart"></ion-icon>\n                    </ion-col>\n                  </ion-row>\n                </ion-card-content>\n              </ion-card>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-col>\n      <!-- order information -->\n      <ion-col col-12 col-sm-4 class="order hidesm">\n        <div class="order-head">\n          <h1>Order List</h1>\n          <button ion-button primary *ngIf="orders.length > 0" (click)="confirmOrder(orders)">Check</button>\n          <h4 *ngIf="orders.length > 0" (click)="delete_allitems()">clear</h4>\n        </div>\n        <div *ngIf="orders.length == 0">You have not ordered yet!</div>\n        <ion-list>\n          <ion-item *ngFor="let order of orders; let i = index" no-lines>\n            <ion-thumbnail item-start>\n              <img src="{{order.food.image}}">\n            </ion-thumbnail>\n            <div class="iteminfo">\n              <h2>{{order.food.name}}</h2>\n              <div class="number">\n                <ion-icon name="remove" (click)="decrement_item(i)"></ion-icon>\n                 {{order.number}}\n                <ion-icon name="add" (click)="increment_item(i)"></ion-icon>\n              </div>\n              <ion-icon name="md-close" color="danger" (click)="delete_item(i)"></ion-icon>\n            </div>\n            <div class="itemtotal">{{order.food.price*order.number}}</div>\n          </ion-item>\n        </ion-list>\n        <h3 *ngIf="orders.length > 0">Total price: {{totalprice}}</h3>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- footer when small screen -->\n  <div class="footer-sm">\n    <h3>Total price: {{totalprice}}</h3>\n    <button ion-button full (click)="confirmOrderSmall(orders)">Check</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\front-end\newapp\src\pages\restaurant\restaurant.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
], RestaurantPage);

//# sourceMappingURL=restaurant.js.map

/***/ })

});
//# sourceMappingURL=4.js.map