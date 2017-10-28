webpackJsonp([8],{

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpressPageModule", function() { return ExpressPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__express__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__ = __webpack_require__(281);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ExpressPageModule = (function () {
    function ExpressPageModule() {
    }
    return ExpressPageModule;
}());
ExpressPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__express__["a" /* ExpressPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__["a" /* DirectivesModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__express__["a" /* ExpressPage */]),
        ],
    })
], ExpressPageModule);

//# sourceMappingURL=express.module.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_service_firebase_service__ = __webpack_require__(138);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExpressPage = (function () {
    function ExpressPage(navCtrl, navParams, formBuilder, firebaseService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.firebaseService = firebaseService;
        this.expressForm = formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            address: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            phone: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            item_category: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            item_weight: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            needbox: [false,],
        });
    }
    ExpressPage.prototype.submitOrder = function (value) {
        var express = {
            username: value.username,
            address: value.address,
            phone: value.phone,
            item_category: value.item_category || "not filled",
            item_weight: value.item_weight || "not filled",
            needbox: value.needbox,
        };
        console.log(express);
        this.firebaseService.expressOrder(express);
    };
    return ExpressPage;
}());
ExpressPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-express',template:/*ion-inline-start:"E:\front-end\newapp\src\pages\express\express.html"*/'<ion-header #header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <img src="http://www.csufablab.org/wp-content/uploads/2017/05/ups-logo-designer-project-flat-ups-logo-design-concept-mr-william-barry-new-logo.png" />\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content hide-header [head]="header">\n  <div class="expressguide">\n    <div class="container">\n      <div class="res-info">\n        <!-- <img src="./chihuo.jpg" /> -->\n        <img src="http://www.csufablab.org/wp-content/uploads/2017/05/ups-logo-designer-project-flat-ups-logo-design-concept-mr-william-barry-new-logo.png" />\n      </div>\n    </div>\n  </div>\n  <ion-grid>\n    <div class="expressrules">\n      <h1>Rules</h1>\n      <ul>\n        <li>first fule</li>\n        <li>second fule</li>\n        <li>third fule</li>\n      </ul>\n    </div>\n    <ion-row>\n        <ion-col col-12 col-lg-6>\n          <div class="breadcrumb">\n          	<ul>\n          		<li><a>step one</a></li>\n              <li><a>step two</a></li>\n              <li><a>step three</a></li>\n          	</ul>\n          </div>\n        </ion-col>\n        <ion-col col-12 col-lg-6>\n          <form [formGroup]="expressForm" (ngSubmit)="submitOrder(expressForm.value)">\n            <ion-item [ngClass]="{\'error-border\':!expressForm.controls.username.valid && expressForm.controls.username.touched}">\n              <ion-label floating>name</ion-label>\n              <ion-input type="text" formControlName="username"></ion-input>\n            </ion-item>\n            <div class="error-message" *ngIf="expressForm.controls.username.touched && expressForm.controls.username.hasError(\'required\')">\n              Sorry, username is required!\n            </div>\n            <ion-item>\n              <ion-label floating>address</ion-label>\n              <ion-input type="text" formControlName="address"></ion-input>\n            </ion-item>\n            <div class="error-message" *ngIf="expressForm.controls.address.touched && expressForm.controls.address.hasError(\'required\')">\n              Sorry, address is required!\n            </div>\n            <ion-item>\n              <ion-label floating>phone</ion-label>\n              <ion-input type="text" formControlName="phone"></ion-input>\n            </ion-item>\n            <div class="error-message" *ngIf="expressForm.controls.phone.touched && expressForm.controls.phone.hasError(\'required\')">\n              Sorry, phone is required!\n            </div>\n            <ion-item>\n              <ion-label floating>category</ion-label>\n              <ion-input type="text" formControlName="item_category"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label floating>weight</ion-label>\n              <ion-input type="text" formControlName="item_weight"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label>Need Box</ion-label>\n              <ion-checkbox color="dark" formControlName="needbox"></ion-checkbox>\n            </ion-item>\n            <button ion-button full type="submit">Order</button>\n          </form>\n        </ion-col>\n    </ion-row>\n    <div class="track">\n      <h2>Package Tracking</h2>\n      <a href="https://www.ups.com/us/en/Home.page" target="_blank">UPS official page</a>\n    </div>\n    <ion-row class="dropoff">\n        <ion-col col-12 col-lg-6>\n          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Maps.me_screenshot_7.0.5.png/1200px-Maps.me_screenshot_7.0.5.png"/>\n        </ion-col>\n        <ion-col col-12 col-lg-5>\n          <h2>You can also drop off</h2>\n          <p>blablabla...</p>\n        </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"E:\front-end\newapp\src\pages\express\express.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_3__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */]])
], ExpressPage);

//# sourceMappingURL=express.js.map

/***/ })

});
//# sourceMappingURL=8.js.map