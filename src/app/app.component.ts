import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AdProvider } from '../providers/ad/ad';
import { AskBoyPage } from '../pages/ask-boy/ask-boy';
import { AskGirlPage } from '../pages/ask-girl/ask-girl';
import { PreviewPage } from '../pages/preview/preview';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<any>;

  constructor(public platform: Platform, 
              public statusBar: StatusBar, 
              public splashScreen: SplashScreen,
              private ad: AdProvider) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Videos', component: ListPage, icon: true },
      { title: 'Ask Her', component: AskGirlPage },
      { title: 'Ask Him', component: AskBoyPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.ad.showBannerAd();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    let rand = Math.floor(Math.random() * 1000) % 4;
    if(rand === 0){
      this.ad.showInterstitialAd();
    }else if(rand === 2){
      this.ad.showVideoAd();
    }
    this.nav.setRoot(page.component);
  }
}
