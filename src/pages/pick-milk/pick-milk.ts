import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResultsPage } from '../results/results';

/**
 * Generated class for the PickMilkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pick-milk',
  templateUrl: 'pick-milk.html',
})
export class PickMilkPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PickMilkPage');
  }

  navigate(){
    this.navCtrl.push(ResultsPage);
  }

}
