import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';

/**
 * Generated class for the ThemePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-theme',
  templateUrl: 'theme.html',
})
export class ThemePage {

  themes = [{
    pColor: 'white',
    h3Color: 'wheat',
    bgImage: 'assets/imgs/red.jpg'
  },{
    pColor: 'white',
    h3Color: 'wheat',
    bgImage: 'assets/imgs/blue.jpg'
  },{
    pColor: 'green',
    h3Color: 'red',
    bgImage: 'assets/imgs/yellow.jpg'
  },{
    pColor: 'green',
    h3Color: 'red',
    bgImage: 'assets/imgs/india.png'
  },{
    pColor: 'white',
    h3Color: 'wheat',
    bgImage: 'assets/imgs/pink.jpg'
  },{
    pColor: 'white',
    h3Color: 'wheat',
    bgImage: 'assets/imgs/purple.jpg'
  },{
    pColor: '#ffff51',
    h3Color: '#7f1818',
    bgImage: 'assets/imgs/ganesh.jpg'
  },{
    pColor: 'green',
    h3Color: 'red',
    bgImage: 'assets/imgs/diya.png'
  }];

  constructor(public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThemePage');
  }

  selectTheme(theme){
      this.viewCtrl.dismiss(theme);
  }

}
