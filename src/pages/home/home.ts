import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Storage } from '@ionic/storage';

import { TermsPage } from '../terms/terms';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { TabsPage } from '../tabs/tabs';
import { TestingPage } from '../testing/testing';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private storage: Storage, public navCtrl: NavController, afAuth: AngularFireAuth) {

    console.log('constructor HomePage');

    this.navCtrl.setRoot(TestingPage);

/*     this.storage.get('Registered').then((val) => {

          console.log('val: ' + val);
          
          if (val == null) {
            
            this.navCtrl.setRoot(TermsPage);

          } else {

            if (val == 'Yes') {
              this.navCtrl.setRoot(TabsPage);
            } else {
              this.navCtrl.setRoot(TermsPage);
            }
          }
    });
 */  
  }

}
