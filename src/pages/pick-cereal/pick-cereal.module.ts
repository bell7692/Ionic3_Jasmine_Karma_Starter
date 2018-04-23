import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PickCerealPage } from './pick-cereal';
import { HomePage } from '../home/home';
import { PickMilkPage } from "../pick-milk/pick-milk"

@NgModule({
  declarations: [
    PickCerealPage,
    HomePage,
    PickMilkPage
  ],
  imports: [
    IonicPageModule.forChild(PickCerealPage),
  ],
})
export class PickCerealPageModule {}
