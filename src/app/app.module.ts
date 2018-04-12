import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PreviewPage } from '../pages/preview/preview';

import { SocialSharing } from '@ionic-native/social-sharing';

import { Camera } from '@ionic-native/camera';

import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { RestProvider } from '../providers/rest/rest';
import { HttpClientModule } from '@angular/common/http';
import { AdProvider } from '../providers/ad/ad';
import { AdMobFree } from '@ionic-native/admob-free';
import { UtilityProvider } from '../providers/utility/utility';
import { AskBoyPage } from '../pages/ask-boy/ask-boy';
import { AskGirlPage } from '../pages/ask-girl/ask-girl';
import { DataProvider } from '../providers/data/data';
import { ThemePage } from '../pages/theme/theme';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    PreviewPage,
    AskBoyPage,
    AskGirlPage,
    ThemePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    PreviewPage,
    AskBoyPage,
    AskGirlPage,
    ThemePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SocialSharing,
    Camera,
    YoutubeVideoPlayer,
    RestProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    AdProvider,
    AdMobFree,
    UtilityProvider,
    DataProvider
  ]
})
export class AppModule {}
