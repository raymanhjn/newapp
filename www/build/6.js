webpackJsonp([6],{

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderConfirmPageModule", function() { return OrderConfirmPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__ = __webpack_require__(281);
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
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__["a" /* DirectivesModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
        ],
    })
], OrderConfirmPageModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"E:\front-end\newapp\src\pages\home\home.html"*/'<ion-header #head>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content hide-header [head]="head">\n  <section></section>\n  <ion-grid class="submenu">\n    <ion-row class="nav">\n      <ion-col>\n        <ion-icon name="ios-home"></ion-icon>\n        <div class="icon-text">Home</div>\n      </ion-col>\n      <ion-col>\n        <ion-icon name="ios-restaurant"></ion-icon>\n        <div class="icon-text">Restaurant</div>\n      </ion-col>\n      <ion-col>\n        <ion-icon name="ios-archive"></ion-icon>\n        <div class="icon-text">Express</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <div class=\'intro\'>\n    <ion-row>\n      <ion-col col-12 col-sm-4>\n        <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2463134282,3565387421&fm=27&gp=0.jpg">\n      </ion-col>\n      <ion-col col-12 col-sm-8>\n        <p>外卖的介绍，blablabla..</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12 col-sm-8 class="showsm">\n        <p>快递的介绍，blablabla..</p>\n      </ion-col>\n      <ion-col col-12 col-sm-4>\n        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509127711&di=4d2091d217a8e46061dbdf2421e63dc7&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.25pp.com%2Fuploadfile%2Fsoft%2Fimages%2F2015%2F0106%2F20150106113719868.jpg">\n      </ion-col>\n      <ion-col col-12 col-sm-8 class="hidesm">\n        <p>快递的介绍，blablabla..</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12 col-sm-4>\n        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508533091327&di=fc1b9872151a005568ca0e7cd5fa35b9&imgtype=0&src=http%3A%2F%2F58pic.ooopic.com%2F58pic%2F14%2F86%2F15%2F31h58PIC6BE.jpg">\n      </ion-col>\n      <ion-col col-12 col-sm-8>\n        <p>其他功能的介绍，blablabla..</p>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\front-end\newapp\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=6.js.map