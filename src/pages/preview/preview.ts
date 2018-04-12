import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';

import { SocialSharing } from '@ionic-native/social-sharing';
import * as html2canvas from 'html2canvas';
import { ThemePage } from '../theme/theme';


/**
 * Generated class for the PreviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-preview',
  templateUrl: 'preview.html',
})
export class PreviewPage {

  public info: any;
  canvas: any;
  canvasVisible = false;
  background = 'assets/imgs/red.jpg';
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private socialSharing: SocialSharing,
    private popoverCtrl: PopoverController) {
    this.info = this.navParams.get('info');
    // this.info.dateOfBirth.value = this.formatDate(this.info.dateOfBirth.value);
    // this.info.timeOfBirth.value = this.formateTime(this.info.timeOfBirth.value);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AskGirlPage');
  }

  showPreview() {
    html2canvas(document.querySelector(".preview")).then(canvas => {
      document.querySelector("#preview").appendChild(canvas);
      this.canvasVisible = true;
    });
  }

  changeTheme(event){
    let popover = this.popoverCtrl.create(ThemePage);
    
    popover.onDidDismiss((theme: any) => {
      debugger;
        if(!theme) return;
        let allP = document.querySelectorAll('p');
        let p;
        for(let i = 0; i < allP.length; i++){
          p = allP[i];
          this.changeColor(p, theme.pColor);
        }

        let allH3 = document.querySelectorAll('h3');
        let h3;
        for(let i = 0; i < allH3.length; i++){
          h3 = allH3[i];
          this.changeColor(h3, theme.h3Color);
        }

        this.background = theme.bgImage;
    });

    popover.present({
      ev: event
    });
  }

  changeColor(element: HTMLElement, color: string){
    element.style.color = color;
  }

  ionViewDidEnter1() {
    console.log('ionViewDidEnter PreviewPage');


    const pixelRatio = window.devicePixelRatio;

    const totalWidth = window.innerWidth;

    this.canvas = <HTMLCanvasElement>document.getElementById("preview");

    var ctx = this.canvas.getContext("2d");





    const font = 30 / pixelRatio;




    let keys = Object.keys(this.info);
    ctx.canvas.width = totalWidth;
    ctx.canvas.height = window.innerHeight + 200;

    var grd = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
    grd.addColorStop(0, "yellow");
    grd.addColorStop(1, "#B22222");

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    //ctx.scale(pixelRatio, pixelRatio);

    ctx.font = font + "px Arial";

    let x = 10 * pixelRatio, y = 10 * pixelRatio;

    var grdHdr = ctx.createLinearGradient(0, 0, ctx.canvas.width, 0);
    grdHdr.addColorStop(0, "skyblue");
    grdHdr.addColorStop(1, "#B22222");
    ctx.fillStyle = grdHdr;

    ctx.fillRect(0, 0, ctx.canvas.width, font + 2 * y);

    ctx.fillStyle = '#eee';

    ctx.textAlign = "center";

    ctx.fillText('Bio Data', ctx.canvas.width / 2, y + font / 2);

    ctx.fillStyle = '#333';
    y += (font + 2 * y + 15 + (this.info.photo.value ? 200 : 0));



    for (let i = 0; i < keys.length; i++) {
      if (keys[i] === 'photo' || !this.info[keys[i]].value) {
        continue;
      }
      ctx.textAlign = "left";
      ctx.fillText(this.info[keys[i]].label, x, y);
      ctx.textAlign = "right";
      if (keys[i] === 'name') {
        ctx.fillText(this.info[keys[i]].value.initial + ' ' + this.info[keys[i]].value.name, totalWidth - x, y);
      } else if (keys[i] === 'height') {
        ctx.fillText(this.info[keys[i]].value.feet + ' ' + this.info[keys[i]].value.inch, totalWidth - x, y);
      } else if (keys[i] === 'address') {
        let address = this.info[keys[i]].value;
        if (address.houseno) {
          ctx.fillText(address.houseno + ',', totalWidth - x, y);
          y += (font + 15);
        }
        if (address.street) {
          ctx.fillText(address.street + ',', totalWidth - x, y);
          y += (font + 15);
        }
        if (address.locality) {
          ctx.fillText(address.locality + ',', totalWidth - x, y);
          y += (font + 15);
        }

        ctx.fillText(address.city + ',', totalWidth - x, y);
        y += (font + 15);

        ctx.fillText(address.state + ', ' + address.country, totalWidth - x, y);

      } else {
        ctx.fillText(this.info[keys[i]].value, totalWidth - x, y);
      }
      y += (font + 15);
    }

    if (this.info.photo.value) {
      ctx.beginPath();
      ctx.arc(ctx.canvas.width / 2, (90 + 20 + font + 20 * pixelRatio), 90, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.clip();

      let img = new Image();
      img.src = this.info.photo.value;
      img.onload = function () {
        const height = img.naturalHeight;
        const width = img.naturalWidth;
        const imgWidth = 180;
        const imgHeight = height / width * imgWidth;
        ctx.drawImage(img, (ctx.canvas.width - imgWidth) / 2, 20 + font + 20 * pixelRatio, imgWidth, imgHeight);
      }
    }



    //this.drawImg('assets/imgs/logo.png', ctx);
  }

  formatDate(dateString) {
    dateString = dateString.replace(/-/g, '/');
    var split = new Date().toString().split(" ");
    var timeZoneFormatted = split[split.length - 1];

    const date = new Date(dateString + ' ' + timeZoneFormatted);

    var monthNames = [
      "Jan", "Feb", "Mar",
      "Apr", "May", "Jun", "Jul",
      "Aug", "Sep", "Oct",
      "Nov", "Dec"
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    return (monthNames[monthIndex] + ' ' + day + ', ' + year);
  }


  formateTime(dateTimeString) {
    const d = new Date('01/01/2000 ' + dateTimeString);
    let hr = d.getHours();
    let min = d.getMinutes();
    let minStr = '' + min;
    if (min < 10) {
      minStr = "0" + min;
    }
    var ampm = "AM";
    if (hr > 12) {
      hr -= 12;
      ampm = "PM";
    }

    return (hr + ':' + minStr + ' ' + ampm);
  }

  drawImg(img, tmpCtx) {
    //var tmpCanvas = document.createElement('canvas'),

    let image = new Image();

    //console.log(img + ' loaded');

    image.src = img;
    console.log(image);


    // draw the cached images to temporary canvas and return the context
    tmpCtx.save();
    tmpCtx.beginPath();
    tmpCtx.arc(2 * 24, 2 * 24, 2 * 24, 0, Math.PI * 2, true);
    tmpCtx.closePath();
    tmpCtx.clip();

    tmpCtx.drawImage(image, 0, 0, 4 * 24 + 2, 4 * 24 + 2);

    tmpCtx.beginPath();
    tmpCtx.arc(0, 0, 2, 0, Math.PI * 2, true);
    tmpCtx.clip();
    tmpCtx.closePath();
    tmpCtx.restore();
  };




  share() {
    html2canvas(document.querySelector(".preview")).then(canvas => {
      const data = canvas.toDataURL("image/png");
      console.log('Image data ' + data);
      this.socialSharing.share(null, null, data, null).then(() => {

      }).catch(() => {

      });
    });
  }

}
