import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';


import { TabsPage } from '../tabs/tabs';


/**
 * Generated class for the GameRulesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-game-rules',
  templateUrl: 'game-rules.html',
})
export class GameRulesPage {

  constructor(private storage: Storage, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GameRulesPage');
  }

  continueClick() {
    
    this.storage.set('GameRulesRead', 'Yes').then(data => {});

    this.navCtrl.setRoot(TabsPage);
    
  }

}
