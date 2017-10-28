import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpressPage } from './express';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    ExpressPage,
  ],
  imports: [
    DirectivesModule,
    IonicPageModule.forChild(ExpressPage),
  ],
})
export class ExpressPageModule {}
