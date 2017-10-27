import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Toast } from '@ionic-native/toast';
import { EmailComposer } from '@ionic-native/email-composer';

import { TabsPage } from '../tabs/tabs';


/**
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})
export class FeedbackPage {

  @ViewChild('subject') subject;
  @ViewChild('feedback') feedback;

  constructor(private emailComposer: EmailComposer, private toast: Toast, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackPage');
  }

  sendFeedback() {

    console.log('Subject: ' + this.subject.value  );
    console.log('Feedback: ' + this.feedback.value );
    
    let email = {
      to: 'rabinski@protonmail.com',
      subject: this.subject.value,
      body: this.feedback.value,
      isHtml: true
    };
    
    this.emailComposer.open(email).then(data => {});

    this.toast.show('Thank You for your Feedback', '3000', 'top').subscribe(
          toast => {
    });
    
    this.navCtrl.popToRoot();

  }
}
