import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PickCerealPage } from '../pick-cereal/pick-cereal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


  navigate(){
    this.navCtrl.push(PickCerealPage);
  }

}
