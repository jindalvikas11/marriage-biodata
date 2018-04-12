
import { Injectable } from '@angular/core';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig, AdMobFreeRewardVideoConfig } from '@ionic-native/admob-free';
import { Platform } from 'ionic-angular';


/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AdProvider {

  testing: false;

  constructor(private admobFree: AdMobFree,
              private platform: Platform) {
    
  }

  showBannerAd() {
    const bannerConfig: AdMobFreeBannerConfig = {
      // add your config here
      // for the sake of this example we will just use the test config
        id: this.platform.is('ios') ? 'ca-app-pub-5585858473111395/2270729641' : 'ca-app-pub-5585858473111395/2615835266',
        autoShow: true,
        isTesting: this.testing
     };

     this.admobFree.banner.config(bannerConfig);

     this.admobFree.banner.prepare()
     .then(() => {
       // banner Ad is ready
       // if we set autoShow to false, then we will need to call the show method here
     })
     .catch(e => console.log(e));
     
  }

  showInterstitialAd() {
     const interstitialConfig: AdMobFreeInterstitialConfig = {
      // add your config here
      // for the sake of this example we will just use the test config
        id: this.platform.is('ios') ? 'ca-app-pub-5585858473111395/4397720600' : 'ca-app-pub-5585858473111395/4559472321',
        autoShow: true,
        isTesting: this.testing
     };

     this.admobFree.interstitial.config(interstitialConfig);

     this.admobFree.interstitial.prepare()
       .then(() => {
         // banner Ad is ready
         // if we set autoShow to false, then we will need to call the show method here
       })
       .catch(e => console.log(e));
  }

  showVideoAd(){
    const videoConfig: AdMobFreeRewardVideoConfig = {
        id: this.platform.is('ios') ? 'ca-app-pub-5585858473111395/8552588032' : 'ca-app-pub-5585858473111395/4395820790',
        autoShow: true,
        isTesting: this.testing
    }

    this.admobFree.rewardVideo.config(videoConfig);

    this.admobFree.rewardVideo.prepare().then(() => {

    }).catch(e => console.log(e));
  }
}
