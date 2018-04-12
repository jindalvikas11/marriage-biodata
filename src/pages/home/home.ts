import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { PreviewPage } from '../preview/preview';

import { Camera, CameraOptions } from '@ionic-native/camera';
import { AdProvider } from '../../providers/ad/ad';
import { RestProvider } from '../../providers/rest/rest';
import { UtilityProvider } from '../../providers/utility/utility';
import { DataProvider } from '../../providers/data/data';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public infoForm: FormGroup;
  //info = {};
  heightFeet = new Array;
  heightInch = new Array;
  weightKG = new Array;
  testing = false;
  info = {
    name: {
      label: 'Name',
      value: {
        initial: 'Mr',
        name: this.testing ? 'Salman Khan' :'',
      },
    },
    fatherName: {
      label: 'Father\'s Name',
      value: this.testing ? 'Walid Khan' :'',
    },
    fatherOccupation: {
      label: 'Father\'s Occupation',
      value: this.testing ? 'Retired' :'',
    },
    motherName: {
      label: 'Mother\'s Name',
      value: this.testing ? 'Khala Khan' :'',
    },
    motherOccupation: {
      label: 'Mother\'s Occupation',
      value: this.testing ? 'House Wife' :'',
    },
    dateOfBirth: {
      label: 'Date of Birth',
      value: this.testing ? '1/1/1975' :'',
    },
    timeOfBirth: {
      label: 'Time of Birth',
      value: this.testing ? '10:35' :'',
    },
    placeOfBirth: {
      label: 'Place of Birth',
      value: this.testing ? 'Mumbai, India' :'',
    },
    height: {
      label: 'Height',
      value: {
        feet: '5 Feet',
        inch: '5 Inches'
      }
    },
    weight: {
      label: 'Weight',
      value: '65 kg'
    },
    mobile: {
      label: 'Mobile',
      value: this.testing ? '1234567890' : ''
    },
    address: {
      label: 'Address',
      value: {
        'city': this.testing ? 'Mumbai' : '',
        'state': this.testing ? 'Maharashtra' : '',
        'country':this.testing ? 'India' : ''
      }
    },
    caste: {
      label: 'Caste',
      value: this.testing ? 'Muslim' : ''
    },
    qualification: {
      label: 'Qualification',
      value: this.testing ? 'MCA' : ''
    },
    occupation: {
      label: 'Occupation',
      value: this.testing ? 'Actor' : ''
    },
    photo: {
      label : 'Photo',
      value: this.testing ? 'assets/imgs/salman.jpg' : ''
    },
    salary: {
      label : 'Annual Salary',
      value: this.testing ? '1400000' : ''
    }

  }

  constructor(public navCtrl: NavController,
    private formBuilder: FormBuilder,
    private camera: Camera,
    private ad: AdProvider,
    private utility: UtilityProvider,
    private rest: RestProvider,
    private data: DataProvider) {

    this.getData();

    for (let i = 4; i < 7; i++) {
      this.heightFeet.push(i);
    }

    for (let i = 0; i < 12; i++) {
      this.heightInch.push(i);
    }

    for (let i = 30; i < 101; i++) {
      this.weightKG.push(i);
    }



    this.infoForm = this.formBuilder.group({
      initial: ['', Validators.required],
      name: ['', Validators.required],
      fatherName: ['', Validators.required],
      fatherOccupation: ['', Validators.required],
      motherName: ['', Validators.required],
      motherOccupation: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      timeOfBirth: ['', Validators.required],
      heightFeet: ['', Validators.required],
      heightInch: ['', Validators.required],
      placeOfBirth: ['', Validators.required],
      mobile: ['', Validators.required],
      houseno: [''],
      street: [''],
      locality: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      caste: ['', Validators.required],
      weight: ['', Validators.required],
      qualification: ['', Validators.required],
      occupation: ['', Validators.required],
      salary: ['']
    });
  }

  getData(){
    let loader = this.utility.showLoader();
    this.rest.getVideoList().subscribe((data) => {
      loader.dismiss();
      this.data.data = data;
    }, (err) => {
      loader.dismiss();
    });
  }

  onSubmit() {
    this.ad.showInterstitialAd();
    this.navCtrl.push(PreviewPage, {
      info: this.info
    });
  }

  uploadPhoto(isCamera) {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: isCamera ? this.camera.PictureSourceType.CAMERA :
        this.camera.PictureSourceType.PHOTOLIBRARY,
      correctOrientation: true,
    }



    this.camera.getPicture(options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.info.photo.value = base64Image;
    }, (err) => {
      // Handle error
    });
  }

}
