import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PickMilkPage } from './pick-milk';
import { ResultsPage } from '../results/results';

@NgModule({
  declarations: [
    PickMilkPage,
    ResultsPage
  ],
  imports: [
    IonicPageModule.forChild(PickMilkPage),
  ],
})
export class PickMilkPageModule {}
