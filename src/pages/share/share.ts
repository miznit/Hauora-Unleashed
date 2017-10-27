import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Toast } from '@ionic-native/toast';
import { Storage } from '@ionic/storage';
import { Firebase } from '@ionic-native/firebase';
import { Platform } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the SharePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-share',
  templateUrl: 'share.html',
})
export class SharePage {

  public facebook: string = '';
  public twitter: string = '';
  public iosAndroid: string = '';
  
  constructor(public platform: Platform, private firebase: Firebase, public storage: Storage, private toast: Toast, private socialSharing: SocialSharing, public navCtrl: NavController, public navParams: NavParams) {
  
    if (this.platform.is('android')) {

      this.facebook = 'com.facebook.katana';
      this.twitter = 'twitter';
      this.iosAndroid = 'Android';

    } else {

      this.facebook = 'com.apple.social.facebook';
      this.twitter = 'com.apple.social.twitter';
      this.iosAndroid = 'Ios';
      
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SharePage');
  }

  shareFacebookClick() {
    
    console.log('FacebookClick: ' + this.facebook.toString());

    this.socialSharing.canShareVia(this.facebook.toString(), 'Test', null, null, null).then(() => {
        
      this.socialSharing.shareViaFacebook(null , null, 'https://www.maorimenshealth.co.nz/wp-content/uploads/2017/06/HU-Watch-this-Space.png').then(() => {

        this.toast.show(`Thanks for the share!`, '3000', 'center').subscribe(toast => {});
        
              this.firebase.logEvent('share', {
                content_type: '"' + 'Facebook' + '"',
                item_id: '"' + this.iosAndroid.toString() + '"'
              }).then(val =>{});
              
        
      });
        
    }).catch(() => {

      this.toast.show(`Facebook app not found`, '4000', 'center').subscribe(toast => {});

    });

    this.storage.set('ShareDone', 'Yes');
    
    this.navCtrl.setRoot(TabsPage);
    
  }

  shareTwitterClick() {

    console.log('TwitterClick: ' + this.twitter.toString());
    
    this.socialSharing.canShareVia(this.twitter.toString(), 'Test', null, null, null).then(() => {

      this.socialSharing.shareViaTwitter(null , null, 'https://www.maorimenshealth.co.nz/wp-content/uploads/2017/06/HU-Watch-this-Space.png').then(() => {

        this.toast.show(`Thanks for the share!`, '3000', 'center').subscribe(toast => {});
        
              this.firebase.logEvent('share', {
                content_type: '"' + 'Twitter' + '"',
                item_id: '"' + this.iosAndroid.toString() + '"'
              }).then(val =>{});
        
      });
        
    }).catch(() => {

      this.toast.show(`Twitter app not found`, '4000', 'center').subscribe(toast => {});

    });

    this.storage.set('ShareDone', 'Yes');
    
    this.navCtrl.setRoot(TabsPage);
    
  }
}
