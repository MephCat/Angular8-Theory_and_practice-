import {NgModule} from '@angular/core';
import {AboutPageComponent} from './about-page.component';
import {SharedModule} from '../../shared/shared.module';
import {CommonModule} from '@angular/common';
import {AboutPageRoutingModule} from './about-page-routing.module';
import {HomePageComponent} from '../home-page/home-page.component';

@NgModule({
  declarations: [
    AboutPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AboutPageRoutingModule
  ]
})
export class AboutPageModule {

}
