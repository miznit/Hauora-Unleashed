import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Storage } from '@ionic/storage';
import { Toast } from '@ionic-native/toast';
import { Firebase } from '@ionic-native/firebase';

import { TabsPage } from '../tabs/tabs';


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  @ViewChild('name') name;
  @ViewChild('location') location;
  @ViewChild('age') age;
  @ViewChild('iwi') iwi;
  
  public Avatar: string = 'B';

  constructor(private firebase: Firebase, public storage: Storage, private toast: Toast, private firebaseauth:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
    console.log('constructor RegisterPage');
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  UserRegister() {

    console.log('UserRegister' + this.name.value);
    var valid = true;
    
    if (this.name.value == '') {
      this.toast.show(`Please enter your name`, '4000', 'center').subscribe(
        toast => {
          console.log(toast);
        }
      );

      valid = false;

    }
    if ( this.location.value == '') {
      this.toast.show(`Please enter your location`, '4000', 'center').subscribe(
        toast => {
          console.log(toast);
        }
      );

      valid = false;

    }
    if ( this.age.value == 0) {
      this.toast.show(`Please enter your age`, '4000', 'center').subscribe(
        toast => {
          console.log(toast);
        }
      );
      valid = false;

    }
    if ( this.iwi.value == '') {
      this.toast.show(`Please enter your iwi`, '4000', 'center').subscribe(
        toast => {
          console.log(toast);
        }
      );

      valid = false;

    }

    if (valid) {
      this.storage.set('Registered', 'Yes').then(data => {
        this.storage.set('Name', this.name.value).then(data => {
          this.storage.set('Age', this.age.value).then(data => {
            this.storage.set('Location', this.location.value).then(data => {
              this.storage.set('Iwi', this.iwi.value).then(data => {
              });
            });
          });
        });
    
        this.firebase.logEvent('Register', {
          name:  '"' + this.name.value + '"', 
          age:  '"' + this.age.value + '"', 
          location:  '"' + this.location.value + '"', 
          iwi:  '"' + this.iwi.value + '"', 
          avatar:  '"' + this.Avatar.toString() + '"'
          }).then(val =>{});

        this.firebase.logEvent('join_group', {
          group_id:  '"' + this.iwi.value + '"'}).then(val =>{});
  
          this.navCtrl.setRoot(TabsPage);

      });
    }

  }
}
