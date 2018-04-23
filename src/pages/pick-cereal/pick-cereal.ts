import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { PickMilkPage } from '../pick-milk/pick-milk';

/**
 * Generated class for the PickCerealPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pick-cereal',
  templateUrl: 'pick-cereal.html',
})
export class PickCerealPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PickCerealPage');
  }

  navigate(){
    this.navCtrl.push(PickMilkPage);
  }
}
