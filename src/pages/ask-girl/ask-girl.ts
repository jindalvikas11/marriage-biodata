import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the AskGirlPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ask-girl',
  templateUrl: 'ask-girl.html',
})
export class AskGirlPage {
  questions: Array<any>;
  askList: any;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private data: DataProvider) {
                this.askList = this.data.data.askByBoy[0];
                this.questions = Object.keys(this.askList);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AskGirlPage');
  }
}
