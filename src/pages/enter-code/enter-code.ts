import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Toast } from '@ionic-native/toast';
import { Firebase } from '@ionic-native/firebase';

import { TabsPage } from '../tabs/tabs';
import { LevelupPage } from '../levelup/levelup';
import { SharePage } from '../share/share';

/**
 * Generated class for the EnterCodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-enter-code',
  templateUrl: 'enter-code.html',
})
export class EnterCodePage {

  @ViewChild('code') code;
  
  public stall: string = 'Find the stall code';
  public taha: string = 'Tinana';
  public shareDone: string = '';
  public name: string = '';

  public tinana: number = 0;
  public wairua: number = 0;
  public whanau: number = 0;
  public hinengaro: number = 0;

  public tinanaLvL: number = 0;
  public wairuaLvL: number = 0;
  public whanauLvL: number = 0;
  public hinengaroLvL: number = 0;
  public score: number = 0;
  
  public event_taha: number = 0;

  public understanding: number = 20;

  constructor(private firebase: Firebase, private toast: Toast, public storage: Storage, public navCtrl: NavController, public navParams: NavParams) {

  this.taha = this.navParams.get('taha');

  this.getStroage('ShareDone').then(data => {
    this.shareDone = data;
  });

  this.getStroage('Name').then(data => {
    this.name = data;
  });

  this.getStroage('Tinana').then(tinanaData => {
    this.tinana = parseFloat(tinanaData.toString());
  });

  this.getStroage('Wairua').then(WairuaData => {
      this.wairua = parseFloat(WairuaData.toString());
  });
        
  this.getStroage('Whanau').then(WhanauData => {
      this.whanau = parseFloat(WhanauData.toString());
  });
    
  this.getStroage('Hinengaro').then(HinengaroData => {
      this.hinengaro = parseFloat(HinengaroData.toString()); 
  });

  this.getStroage('TinanaLvL').then(tinanaLvLData => {
    this.tinanaLvL = parseFloat(tinanaLvLData.toString());
  });
    
  this.getStroage('WairuaLvL').then(WairuaLvLData => {
      this.wairuaLvL = parseFloat(WairuaLvLData.toString());
  });
        
  this.getStroage('WhanauLvL').then(WhanauLvLData => {
      this.whanauLvL = parseFloat(WhanauLvLData.toString());
  });
    
  this.getStroage('HinengaroLvL').then(HinengaroLvLData => {
    this.hinengaroLvL = parseFloat(HinengaroLvLData.toString()); 
  });

  this.getStroage('Score').then(data => {
    this.score = parseFloat(data.toString()); 
  });

}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnterCodePage');
  }

  checkCode() {
    
    console.log('Code:' +  this.code.value );

    switch (this.code.value) {

      case  '1234': {

        this.stall = 'Test Stall 1234';
        break;
        
      }

      default: {
        this.stall = 'Test Stall 1234';
        this.code.value = '1234';
/*         this.toast.show('Cannot find that code', '3000', 'top').subscribe(
        toast => {
        });
 */        break;

      }
    } 
        
  }

  redeemCode() {

    if (this.stall == 'Find the stall code') {
        this.toast.show(`Enter a code to check`, '3000', 'top').subscribe(
        toast => {
        });
    } else {
      
        console.log('Understanding_' +  this.understanding.toString() );
      
        this.firebase.logEvent('Stall_' + this.code.value, {
          taha:  '"' + this.taha.toString() + '"', 
          understanding:  '"' + this.understanding.toString() + '"'
          
          }).then(val =>{});

        this.firebase.logEvent(this.taha.toString(), {
          stall:  '"' + this.stall.toString() + '"', 
          understanding:  '"' + this.understanding.toString() + '"'
          
          }).then(val =>{});
  
        this.firebase.logEvent('Understanding_' + this.understanding.toString(), {
          stall:  '"' + this.stall.toString() + '"', 
          taha:  '"' + this.taha.toString() + '"'
          
          }).then(val =>{});
  
          
        this.getStroage(this.taha).then(data => {

            console.log('Data:' +  data.toString() );
          
            let oldtaha = parseFloat(data.toString());
            
            oldtaha = oldtaha + .2;

            this.event_taha = oldtaha * 5;
            
            console.log(this.taha.toString() + ' ' + oldtaha.toString());
                
            this.storage.set(this.taha.toString(), parseFloat(oldtaha.toString()).toString()).then(val => {});
 
            switch (this.taha) {
              case 'Tinana': {
                this.tinana = oldtaha;
                if (this.tinana == 1) {
                    this.tinanaLvL ++;
                    this.updateScore(15);
                    this.storage.set('TinanaLvL', parseFloat(this.tinanaLvL.toString()).toString()).then(data => {});
                    this.storage.set('Tinana', '0').then(data => {});
                    

                    if ((this.wairuaLvL >= this.tinanaLvL) &&
                        (this.whanauLvL >= this.tinanaLvL) &&
                        (this.hinengaroLvL >= this.tinanaLvL)) {
                          this.toast.show(`You reached a new level`, '3000', 'top').subscribe(toast => {});
                          this.updateScore(50);
                          this.navCtrl.setRoot(LevelupPage);
                    } else {
                      this.toast.show(`Tinana reached level ` + this.tinanaLvL.toString(), '3000', 'top').subscribe(toast => {});
                      if (this.shareDone == 'No') {
                        this.navCtrl.setRoot(SharePage);
                      } else {
                        this.navCtrl.setRoot(TabsPage);
                      }
                    }
                } else {
                  this.updateScore(5);
                  this.navCtrl.setRoot(TabsPage);
                }   
                break;
              }

              case 'Wairua': {
                this.wairua = oldtaha;
                if (this.wairua == 1) {
                  this.wairuaLvL ++;
                  this.updateScore(15);
                  this.storage.set('WairuaLvL', parseFloat(this.wairuaLvL.toString()).toString()).then(data => {});
                  this.storage.set('Wairua', '0').then(data => {});
                  
                  if ((this.tinanaLvL >= this.wairuaLvL) &&
                      (this.whanauLvL >= this.wairuaLvL) &&
                      (this.hinengaroLvL >= this.wairuaLvL)) {
                        this.toast.show(`You reached a new level`, '3000', 'top').subscribe(toast => {});
                        this.updateScore(50);
                        this.navCtrl.setRoot(LevelupPage);
                  } else {
                    this.toast.show(`Wairua reached level ` + this.wairuaLvL.toString(), '3000', 'top').subscribe(toast => {});
                    if (this.shareDone == 'No') {
                      this.navCtrl.setRoot(SharePage);
                    } else {
                      this.navCtrl.setRoot(TabsPage);
                    }
                }
                } else {
                  this.updateScore(5);
                  this.navCtrl.setRoot(TabsPage);
                }

                break;
              }

              case 'Whanau': {
                this.whanau = oldtaha;
                if (this.whanau == 1) {
                  this.whanauLvL ++;
                  this.updateScore(15);
                  this.storage.set('WhanauLvL', parseFloat(this.whanauLvL.toString()).toString()).then(data => {});
                  this.storage.set('Whanau', '0').then(data => {});
                  
                  
                  if ((this.tinanaLvL >= this.whanauLvL) && (this.whanauLvL >= this.whanauLvL) && (this.hinengaroLvL >= this.whanauLvL)) {
                    this.updateScore(50);
                    this.toast.show(`You reached a new level`, '3000', 'top').subscribe(toast => {});
                    this.navCtrl.setRoot(LevelupPage);
                  } else {
                    this.toast.show(`Whanau reached level ` + this.whanauLvL.toString(), '3000', 'top').subscribe(toast => {});
                    if (this.shareDone == 'No') {
                      this.navCtrl.setRoot(SharePage);
                    } else {
                      this.navCtrl.setRoot(TabsPage);
                    }
                }
                } else {
                  this.updateScore(5);
                  this.navCtrl.setRoot(TabsPage);
                }   
                break;
              } 

              case 'Hinengaro': {

                this.hinengaro = oldtaha;
                if (this.hinengaro == 1) {
                  this.updateScore(15);
                  this.hinengaroLvL ++;
                    this.storage.set('HinengaroLvL', parseFloat(this.hinengaroLvL.toString()).toString()).then(data => {
                    });
                    this.storage.set('Hinengaro', '0').then(data => {});
                    
                    if ((this.tinanaLvL >= this.hinengaroLvL) && (this.wairuaLvL >= this.hinengaroLvL) && (this.whanauLvL >= this.whanauLvL)) {
                      this.updateScore(50);
                      this.toast.show(`You reached a new level`, '3000', 'top').subscribe(toast => {});
                      this.navCtrl.setRoot(LevelupPage);
                    } else {
                      this.toast.show(`Hinengaro reached level ` + this.hinengaroLvL.toString(), '3000', 'top').subscribe(toast => {});
                      if (this.shareDone == 'No') {
                        this.navCtrl.setRoot(SharePage);
                      } else {
                        this.navCtrl.setRoot(TabsPage);
                      }
                    }
                } else {
                  this.updateScore(5);
                  this.navCtrl.setRoot(TabsPage);
                }
    
                break;

              }
            }      
        });
    }
    
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

  updateScore(plus: number) {

    this.score = this.score + plus;
    this.storage.set('Score', parseFloat(this.score.toString()).toString()).then(data => {});

    this.firebase.logEvent('post_score', {
      score: parseFloat(this.score.toString()).toString(),
      character: '"' + this.name.toString() + '"'
      
    }).then(val =>{});

  }
}
