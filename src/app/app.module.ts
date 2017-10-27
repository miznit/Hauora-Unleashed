import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule} from "angularfire2";
import { AngularFireAuthModule } from 'angularfire2/auth';
import { IonicStorageModule } from '@ionic/storage';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { Toast } from '@ionic-native/toast';
import { Firebase } from '@ionic-native/firebase';
import { EmailComposer } from '@ionic-native/email-composer';
import { SocialSharing } from '@ionic-native/social-sharing';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { TermsPage } from '../pages/terms/terms';
import { GamePage } from '../pages/game/game';
import { MapPage } from '../pages/map/map';
import { TinanaPage } from '../pages/tinana/tinana';
import { WairuaPage } from '../pages/wairua/wairua';
import { WhanauPage } from '../pages/whanau/whanau';
import { HinengaroPage } from '../pages/hinengaro/hinengaro';
import { SchedulePage } from '../pages/schedule/schedule';
import { EnterCodePage } from '../pages/enter-code/enter-code';
import { GameRulesPage } from '../pages/game-rules/game-rules';
import { TestingPage } from '../pages/testing/testing';
import { LevelupPage } from '../pages/levelup/levelup';
import { FeedbackPage } from '../pages/feedback/feedback';
import { CongratsPage } from '../pages/congrats/congrats';
import { SharePage } from '../pages/share/share';

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyCdQWn-QqIx6LsijHHTDawznTkrtUGpR7c",
  authDomain: "hauora-unleashed.firebaseapp.com",
  databaseURL: "https://hauora-unleashed.firebaseio.com",
  projectId: "hauora-unleashed",
  storageBucket: "hauora-unleashed.appspot.com",
  messagingSenderId: "1079335272127"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    TermsPage,
    TabsPage,
    SchedulePage,
    MapPage,
    GamePage,
    TinanaPage,
    WairuaPage,
    WhanauPage,
    HinengaroPage,
    EnterCodePage,
    GameRulesPage,
    TestingPage,
    LevelupPage,
    FeedbackPage,
    CongratsPage,
    SharePage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicImageViewerModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    TermsPage,
    TabsPage,
    MapPage,
    SchedulePage,
    GamePage,
    TinanaPage,
    WairuaPage,
    WhanauPage,
    HinengaroPage,
    EnterCodePage,
    GameRulesPage,
    TestingPage,
    LevelupPage,
    FeedbackPage,
    CongratsPage,
    SharePage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Toast,
    Firebase,
    EmailComposer,
    SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
