import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EventPage } from '../pages/event/event';
import { AccountPage } from '../pages/account/account';
import { TabPage } from '../pages/tab/tab';

import { ConnectivityProvider } from '../providers/connectivity/connectivity';
import { GoogleMapsProvider } from '../providers/google-maps/google-maps';
import { LocationsProvider } from '../providers/locations/locations';
import { Network } from '@ionic-native/network';
import { Geolocation } from '@ionic-native/geolocation';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { FIREBASE_CONFIG } from './firebase.credentials';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { NativeGeocoder } from '@ionic-native/native-geocoder';


@NgModule({
  declarations: [
    MyApp,
    ListPage,
    TabPage,
    EventPage,
    AccountPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListPage,
    TabPage,
    EventPage,
    AccountPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConnectivityProvider,
    GoogleMapsProvider,
    LocationsProvider,
    Network,
    Geolocation,
    NativeGeocoder,

  ]
})
export class AppModule {}
