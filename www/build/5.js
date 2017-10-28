webpackJsonp([5],{

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderConfirmPageModule", function() { return OrderConfirmPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_confirm__ = __webpack_require__(436);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OrderConfirmPageModule = (function () {
    function OrderConfirmPageModule() {
    }
    return OrderConfirmPageModule;
}());
OrderConfirmPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__order_confirm__["a" /* OrderConfirmPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__order_confirm__["a" /* OrderConfirmPage */]),
        ],
    })
], OrderConfirmPageModule);

//# sourceMappingURL=order-confirm.module.js.map

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderConfirmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OrderConfirmPage = (function () {
    function OrderConfirmPage(navCtrl, navParams, firebaseService, afauth, formBuilder) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebaseService = firebaseService;
        this.afauth = afauth;
        this.formBuilder = formBuilder;
        this.orderInfo = {};
        this.totalprice = 0;
        this.errorMessage = "";
        this.orders = this.navParams.get('order');
        this.callback = this.navParams.get('callback');
        //form config
        this.orderform = formBuilder.group({
            contact_name: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
            address: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
            phone: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
        });
        //calculate the total price
        if (this.orders && this.orders.length > 0) {
            this.orders.map(function (order) {
                _this.totalprice += order.food.price * order.number;
            });
        }
        //check if user loggined so taht we can get the saved contact methods
        this.afauth.authState.subscribe(function (data) {
            if (data && data.email && data.uid) {
                _this.userLoggedin = true;
                _this.uid = data.uid;
            }
            else {
                _this.userLoggedin = false;
                _this.uid = "";
            }
        });
    }
    OrderConfirmPage.prototype.submitOrder = function (value) {
        if (value.contact_name && value.address && value.phone) {
            var order = this.orders.length > 0 ? this.orders.map(function (order) {
                return order;
            }) : [];
            var contact = {
                contact_name: value.contact_name,
                address: value.address,
                phone: value.phone,
            };
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
        }
        else {
            this.errorMessage = " missing contact infomation ";
        }
    };
    OrderConfirmPage.prototype.decrement_item = function (i) {
        this.orders[i].number = this.orders[i].number - 1;
        this.totalprice -= this.orders[i].food.price;
    };
    OrderConfirmPage.prototype.increment_item = function (i) {
        this.orders[i].number = this.orders[i].number + 1;
        this.totalprice += this.orders[i].food.price;
    };
    OrderConfirmPage.prototype.delete_item = function (i) {
        this.totalprice -= this.orders[i].food.price * this.orders[i].number;
        this.orders.splice(i, 1);
        if (this.orders.length < 1) {
            this.backToMenu();
        }
    };
    OrderConfirmPage.prototype.backToMenu = function () {
        var _this = this;
        this.callback(this.orders).then(function () {
            _this.navCtrl.pop();
        });
    };
    return OrderConfirmPage;
}());
OrderConfirmPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-order-confirm',template:/*ion-inline-start:"E:\front-end\newapp\src\pages\order-confirm\order-confirm.html"*/'<ion-content padding>\n  <ion-row>\n    <ion-col col-12 col-sm-6>\n      <ion-card>\n        <ion-card-header>点餐卡</ion-card-header>\n        <ion-card-content>\n          <ion-list>\n            <ion-item class="itemlist" *ngFor="let order of orders; let i = index">\n              <ion-thumbnail item-start>\n                <img src="{{order.food.image}}">\n              </ion-thumbnail>\n              <div class="iteminfo">\n                <h2>{{order.food.name}}</h2>\n                <div class="number">\n                  <ion-icon name="remove" (click)="decrement_item(i)"></ion-icon>\n                   {{order.number}}\n                  <ion-icon name="add" (click)="increment_item(i)"></ion-icon>\n                </div>\n                <ion-icon name="md-close" color="danger" (click)="delete_item(i)"></ion-icon>\n              </div>\n              <div class="itemtotal">{{order.food.price*order.number}}</div>\n            </ion-item>\n          </ion-list>\n          <h1 *ngIf="orders && orders.length >0" class="total">Total: {{totalprice}}</h1>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n    <ion-col col-12 col-sm-6>\n      <ion-card>\n        <ion-card-header>信息卡</ion-card-header>\n        <ion-card-content>\n          <form [formGroup]="orderform" (ngSubmit)="submitOrder(orderform.value)">\n            <ion-item>\n              <ion-label floating>Name</ion-label>\n              <ion-input type="text" formControlName="contact_name" name="name"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label floating>Address</ion-label>\n              <ion-input formControlName="address" name="address"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label floating>Phone number</ion-label>\n              <ion-input formControlName="phone" name="phone"></ion-input>\n            </ion-item>\n            <div *ngIf="errorMessage && errorMessage.length>0 " class="error-message">{{errorMessage}}</div>\n            <button ion-button icon-left type="submit">\n              <ion-icon name="md-happy"></ion-icon>\n              Submit\n            </button>\n          </form>\n          <button ion-button icon-left (click)="backToMenu()" color="danger">\n            <ion-icon name="md-arrow-round-back"></ion-icon>\n            Back\n          </button>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"E:\front-end\newapp\src\pages\order-confirm\order-confirm.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
], OrderConfirmPage);

//# sourceMappingURL=order-confirm.js.map

/***/ })

});
//# sourceMappingURL=5.js.map