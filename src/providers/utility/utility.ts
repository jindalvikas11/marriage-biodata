import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController, Loading, ToastController, ToastOptions } from 'ionic-angular';


/*
  Generated class for the UtilityProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UtilityProvider {

  loading: Loading;
  constructor(public http: HttpClient,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController) {
    console.log('Hello UtilityProvider Provider');
  }

  showLoader(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();

    return loading;
  }

  presentToast(message, showCloseButton) {
    let options: ToastOptions;
    options = {
      message: message ? message : 'An unknown error occured. Please try again later.',
      position: 'top',
    };

    if(showCloseButton){
      options.showCloseButton = true;
      options.closeButtonText = "Ok";
    }else{
      options.duration = 3000;
    }

    let toast = this.toastCtrl.create(options);
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

}
