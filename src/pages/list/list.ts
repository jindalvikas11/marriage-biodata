import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { RestProvider } from '../../providers/rest/rest';
import { UtilityProvider } from '../../providers/utility/utility';
import { DataProvider } from '../../providers/data/data';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  videoList: Array<any>;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private youtube: YoutubeVideoPlayer,
              private rest: RestProvider,
              private data: DataProvider) {
            this.videoList = this.data.data.videoList;
  }

  openVideo(video){
      this.youtube.openVideo(video.id);
  }
}
