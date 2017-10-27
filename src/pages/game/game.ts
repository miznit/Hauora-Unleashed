import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { EnterCodePage } from '../enter-code/enter-code';
import { TinanaPage } from '../tinana/tinana';
import { WairuaPage } from '../wairua/wairua';
import { WhanauPage } from '../whanau/whanau';
import { HinengaroPage } from '../hinengaro/hinengaro';
import { GameRulesPage } from '../game-rules/game-rules';

/**
 * Generated class for the GamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})

export class GamePage {

  public tinanaProgress: string = '0' + '%';
  public wairuaProgress: string = '0' + '%';
  public whanauProgress: string = '0' + '%';
  public hinengaroProgress: string = '0' + '%';

  public tinana: number = 0;
  public wairua: number = 0;
  public whanau: number = 0;
  public hinengaro: number = 0;

  public hideFAB: boolean = false;
  
  constructor(private storage: Storage, public navCtrl: NavController, public navParams: NavParams) {

    this.storage.get('Tinana').then(data => {
      console.log('Tinana: ' +  data);
      this.tinana = data;
      this.storage.get('TinanaLvL').then(data => {
        console.log('TinanaLvL: ' +  data);
        this.updateTinanaProgress(this.tinana, data);
      });
    });

    
  this.storage.get('Wairua').then(data => {
    this.wairua = data;
    console.log('Wairua: ' +  data);
    this.storage.get('WairuaLvL').then(data => {
      console.log('WairuaLvL: ' +  data);
      this.updateWairuaProgress(this.wairua, data);
      });
  });

  this.storage.get('Whanau').then(data => {
    this.whanau = data;
    console.log('Whanau: ' +  data);
    this.storage.get('WhanauLvL').then(data => {
      console.log('WhanauLvL: ' +  data);
      this.updateWhanauProgress(this.whanau, data);
    });
  });

  this.storage.get('Hinengaro').then(data => {
    this.hinengaro = data;
    console.log('Hinengaro: ' +  data);

    this.storage.get('HinengaroLvL').then(data => {
      console.log('HinengaroLvL: ' +  data);
      this.updateHinengaroProgress(this.hinengaro, data);
    });
  });

  this.storage.get('GameRulesRead').then(data => {
    if (data == 'Yes') {
      this.hideFAB = true;
    }
  });

}

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamePage');
  }

  updateTinanaProgress(currentLvL, LvL ) {

     this.tinanaProgress = Math.min(( (33 * currentLvL) + (33 * LvL)), 100).toFixed(0) + '%';
  }

  updateWairuaProgress(currentLvL, LvL ) {

    this.wairuaProgress = Math.min(( (33 * currentLvL) + (33 * LvL)), 100).toFixed(0) + '%';
  }

  updateWhanauProgress(currentLvL, LvL ) {

    this.whanauProgress = Math.min(( (33 * currentLvL) + (33 * LvL)), 100).toFixed(0) + '%';
  }

  updateHinengaroProgress(currentLvL, LvL ) {

    this.hinengaroProgress = Math.min(( (33 * currentLvL) + (33 * LvL)), 100).toFixed(0) + '%';
  }


  tinanaPage() {
    
    this.navCtrl.setRoot(EnterCodePage,{
      taha: "Tinana"
      }
    );
    
  }
  tinanaInfoPage() {
    
    this.navCtrl.push(TinanaPage);
    
  }
  wairuaPage() {
    
    this.navCtrl.setRoot(EnterCodePage,{
      taha: "Wairua"
      }
    );
      
  }
  wairuaInfoPage() {
    
    this.navCtrl.push(WairuaPage);
      
  }
  whanauPage() {
    
    this.navCtrl.setRoot(EnterCodePage,{
      taha: "Whanau"
      }
    );
      
  }
  whanauInfoPage() {
    
    this.navCtrl.push(WhanauPage);
      
  }
  hinengaroPage() {
    
    this.navCtrl.setRoot(EnterCodePage,{
      taha: "Hinengaro"
      }
    );
      
  }
  hinengaroInfoPage() {
    
    this.navCtrl.push(HinengaroPage);
      
  }

  gameRulesPage() {
    
    this.navCtrl.push(GameRulesPage);
      
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
    
}
