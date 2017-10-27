import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { RegisterPage } from '../register/register';

/**
 * Generated class for the TermsConditionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-terms',
  templateUrl: 'terms.html',
})
export class TermsPage {

  constructor(private storage: Storage, public navCtrl: NavController, public navParams: NavParams) {

    console.log('constructor TermsPage');
    
  }

  accept() {

    this.storage.set('Registered', 'No');
    this.storage.set('GameRulesRead', 'No');
    this.storage.set('ShareDone', 'No');
    
    this.storage.set('Score', '0');
    
    this.storage.set('Tinana', '0');
    this.storage.set('TinanaLvL', '0');
    this.storage.set('Wairua', '0');
    this.storage.set('WairuaLvL', '0');
    this.storage.set('Whanau', '0');
    this.storage.set('WhanauLvL', '0');
    this.storage.set('Hinengaro', '0');
    this.storage.set('HinengaroLvL', '0');
    
    this.navCtrl.setRoot(RegisterPage);
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TermsPage');
  }

}
