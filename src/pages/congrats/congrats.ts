import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FeedbackPage } from '../feedback/feedback';
import { TabsPage } from '../tabs/tabs';


/**
 * Generated class for the CongratsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-congrats',
  templateUrl: 'congrats.html',
})
export class CongratsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CongratsPage');
  }

  feedbackPage() {
    
     this.navCtrl.push(FeedbackPage);
    
  }

  continueClick() {
    
     this.navCtrl.setRoot(TabsPage);
    
  }
}
