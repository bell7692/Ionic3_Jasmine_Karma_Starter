import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PickCerealPage } from '../pages/pick-cereal/pick-cereal';
import { CerealServiceProvider } from '../providers/cereal-service/cereal-service';
import { PickMilkPage } from '../pages/pick-milk/pick-milk';
import { ResultsPage } from '../pages/results/results';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PickCerealPage,
    PickMilkPage,
    ResultsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PickCerealPage,
    PickMilkPage,
    ResultsPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CerealServiceProvider
  ]
})
export class AppModule {}
