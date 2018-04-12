import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the AskBoyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ask-boy',
  templateUrl: 'ask-boy.html',
})
export class AskBoyPage {

  questions: Array<any>;
  askList: any;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private data: DataProvider) {
                this.askList = this.data.data.askByGirl[0];
                this.questions = Object.keys(this.askList);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AskBoyPage');
  }

}
