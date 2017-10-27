import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

import { RegisterPage } from '../register/register';
import { TabsPage } from '../tabs/tabs';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('email') email;
  @ViewChild('password') password;


  constructor(public toastCtrl: ToastController, private firebaseauth:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, afAuth: AngularFireAuth) {
    console.log('constructor LoginPage');
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  userLogin() {
    this.firebaseauth.auth.signInWithEmailAndPassword(this.email.value, this.password.value).then(data => {

      const toast = this.toastCtrl.create({
        message: 'User login successfully',
        duration: 3000,
        position: 'top'
      });

      toast.present();

      this.navCtrl.push(TabsPage);
      

    })
    
    .catch(error => {

      if (error.message == 'The password is invalid or the user does not have a password.') {
        const toast = this.toastCtrl.create({
          message: 'User login failed ' + error.message,
          duration: 3000,
          position: 'top'
        });

        toast.present();
        
      }

      if (error.message == 'There is no user record corresponding to this identifier. The user may have been deleted.') {

        this.firebaseauth.auth.createUserWithEmailAndPassword(this.email.value, this.password.value).then(data => {
          console.log('User Registered successfully, ', data);
    
          this.navCtrl.push(RegisterPage);
          
        })

        .catch(error => {
          console.log('Error in registration, ',error.message);
        })

        console.log(this.email.value);
            
      }

      console.log(error.message);
      
    })

    console.log(this.email.value);

  }
  
}
