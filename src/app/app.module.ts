import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { ComponentsModule } from '../components/components.module';
import { DirectivesModule } from '../directives/directives.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { MyApp } from './app.component';
import { FirebaseServiceProvider } from '../providers/firebase-service/firebase-service';

const firebaseConfig = {
    apiKey: "AIzaSyBxGFG2uHN9spFZcHKs0CnV0wDz_L8OlAw",
    authDomain: "ioninc3db.firebaseapp.com",
    databaseURL: "https://ioninc3db.firebaseio.com",
    projectId: "ioninc3db",
    storageBucket: "",
    messagingSenderId: "747428801191"
};

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    DirectivesModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseServiceProvider
  ]
})
export class AppModule {}
