import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Toast } from '@ionic-native/toast';
import { Firebase } from '@ionic-native/firebase';

import { CongratsPage } from '../congrats/congrats';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LevelupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-levelup',
  templateUrl: 'levelup.html',
})
export class LevelupPage {

  public likeIsClear = true;
  public likeIsOutline = false;
  public loveIsClear = false;
  public loveIsOutline = true;
  public happyIsClear = true;
  public happyIsOutline = false;
  public wowIsClear = true;
  public wowIsOutline = false;
  public cryIsClear = true;
  public cryIsOutline = false;
  public angryIsClear = true;
  public angryIsOutline = false;
  
  public comeAgain: string = 'Yes';
  
  public name: string = '';
  public location: string = '';
  public iwi: string = '';

  @ViewChild('phone') phone;

  constructor(private firebase: Firebase, private toast: Toast, public storage: Storage, public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LevelupPage');
  }

  levelUp() {
  
    this.toast.show(`Congratulations Prize Draw!!`, '3000', 'top').subscribe(toast => {});

    this.firebase.logEvent("Come_Again_" + this.comeAgain.toString(), {}).then(val =>{});

    this.storage.get('Name').then(data => {
      this.name = data.toString();
      console.log('Name' +  this.name.toString() );
      this.storage.get('Location').then(data => {
        this.location = data.toString();
        console.log('Location' +  this.location.toString() );
        this.storage.get('Iwi').then(data => {
          this.iwi = data.toString();
          console.log('Iwi' +  this.iwi.toString() );

          this.firebase.logEvent("Entry", {
            name:  '"' + this.name.toString() + '"', 
            location:  '"' + this.location.toString() + '"', 
            iwi:  '"' + this.iwi.toString() + '"', 
            phone:  '"' + this.phone.value + '"'
           }).then(val =>{});
        });
      });
    });
     
    if (this.angryIsOutline) {
        this.firebase.logEvent("Expo_Reaction_Angry", {}).then(val =>{});
    }  
       
    if (this.cryIsOutline) {
      this.firebase.logEvent("Expo_Reaction_Cry", {}).then(val =>{});
    }  
     
    if (this.happyIsOutline) {
      this.firebase.logEvent("Expo_Reaction_Happy", {}).then(val =>{});
    }  
   
    if (this.likeIsOutline) {
      this.firebase.logEvent("Expo_Reaction_Like", {}).then(val =>{});
    }  
 
    if (this.loveIsOutline) {
      this.firebase.logEvent("Expo_Reaction_Love", {}).then(val =>{});
    }  

    if (this.wowIsOutline) {
      this.firebase.logEvent("Expo_Reaction_WoW", {}).then(val =>{});
    }  

     this.navCtrl.setRoot(CongratsPage);
    
  }

  getStroage(key: string): any {
    
        var return_data = this.storage.get(key).then(data => {
          
          if (data !=null) {
              return Promise.resolve(data);
          } else {
              return Promise.resolve('0');
          }
    
        });
    
        return Promise.resolve(return_data);
    
  }
    
  resetAll() {
    this.likeIsClear = true;
    this.likeIsOutline = false;
    this.loveIsClear = true;
    this.loveIsOutline = false;
    this.happyIsClear = true;
    this.happyIsOutline = false;
    this.wowIsClear = true;
    this.wowIsOutline = false;
    this.cryIsClear = true;
    this.cryIsOutline = false;
    this.angryIsClear = true;
    this.angryIsOutline = false;
  }

  likeClick() {
    
    this.resetAll();
    this.likeIsClear = false;
    this.likeIsOutline = true;
    
  }

  loveClick() {
    
    this.resetAll();
    this.loveIsClear = false;
    this.loveIsOutline = true;
    
  }

  happyClick() {

    this.resetAll();
    this.happyIsClear = false;
    this.happyIsOutline = true;

  }
    
  wowClick() {
    
    this.resetAll();
    this.wowIsClear = false;
    this.wowIsOutline = true;
    
  }

  cryClick() {
    
    this.resetAll();
    this.cryIsClear = false;
    this.cryIsOutline = true;
    
  }

  angryClick() {
    
    this.resetAll();
    this.angryIsClear = false;
    this.angryIsOutline = true;
    
  }
  
}
