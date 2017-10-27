import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { TabsPage } from '../tabs/tabs';
import { TermsPage } from '../terms/terms';
import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';
import { LevelupPage } from '../levelup/levelup';
import { FeedbackPage } from '../feedback/feedback';
import { CongratsPage } from '../congrats/congrats';
import { SharePage } from '../share/share';


/**
 * Generated class for the TestingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-testing',
  templateUrl: 'testing.html',
})
export class TestingPage {

  constructor(public storage: Storage, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestingPage');
  }

  loginPage() {
    
     this.navCtrl.setRoot(LoginPage);
    
  }
  termsPage() {
    
     this.navCtrl.setRoot(TermsPage);
    
  }
  registerPage() {
    
     this.navCtrl.setRoot(RegisterPage);
    
  }
  menuPage() {
    
     this.navCtrl.setRoot(TabsPage);
    
  }
  levelUpPage() {
    
     this.navCtrl.setRoot(LevelupPage);
    
  }

  feedbackPage() {
    
     this.navCtrl.setRoot(FeedbackPage);
    
  }

  congratsPage() {
    
     this.navCtrl.setRoot(CongratsPage);
    
  }

  sharePage() {
    
     this.navCtrl.setRoot(SharePage);
    
  }
  clearStorage() {
    
    // this.storage.remove('Tinana').then(data => {
    // });

    // this.storage.remove('Wairua').then(data => {
    // });

    // this.storage.remove('Whanau').then(data => {
    // });

    this.storage.remove('Hinengaro').then(data => {
    });

    this.storage.remove('Registered').then(data => {
    });

  
  }
  
}
