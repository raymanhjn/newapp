import { Component,ViewChild } from '@angular/core';
import { Nav,Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseServiceProvider } from '../providers/firebase-service/firebase-service';
import { AngularFireList } from 'angularfire2/database';
import { User } from '../models/user';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:string = 'HomePage';
  pages: Array<{title: string, component: string, icon:string}>;
  userFromFirebase: AngularFireList<any>;
  userLoggedin: boolean;
  username: string;
  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              private afauth: AngularFireAuth,
              public firebaseService:FirebaseServiceProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = [
        { title: 'Home', component: "HomePage", icon:"ios-home-outline" },
        { title: 'Restaurant', component: "RestaurantPage",icon:"ios-restaurant-outline" },
        { title: 'Express', component: "ExpressPage", icon:"ios-archive-outline"}
      ];

    this.afauth.authState.subscribe( data => {
      if(data && data.email && data.uid) {
        console.log(data.uid);
        this.userFromFirebase = this.firebaseService.getUserProfile(data.uid);
        this.userFromFirebase.valueChanges<User>().subscribe( data => {
          this.username = data[0].username;
          console.log(this.username);
        })
        this.userLoggedin=true;
      } else {
        console.log("no user login");
        this.userLoggedin=false;
      }
    });
  }


  openPage(page) {
    this.nav.setRoot(page.component);
  }

  logout() {
    this.afauth.auth.signOut();
    this.nav.setRoot("HomePage");
  }

  gotoUserAuthPage() {
    this.nav.setRoot("UserAuthPage");
  }

  gotoOrderHistoryPage() {
    this.nav.setRoot("HistoryPage");
  }

  gotoFavoritePage() {
    this.nav.setRoot("UserAuthPage");
  }

  gotoUserProfilePage() {
    if(this.userLoggedin) {
      this.nav.setRoot("UserProfilePage");
    }
  }

}
