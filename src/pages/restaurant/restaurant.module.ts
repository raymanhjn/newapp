import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RestaurantPage } from './restaurant';
import { DirectivesModule } from '../../directives/directives.module';
@NgModule({
  declarations: [
    RestaurantPage,
  ],
  imports: [
    DirectivesModule,
    IonicPageModule.forChild(RestaurantPage),
  ],
})
export class RestaurantPageModule {}
