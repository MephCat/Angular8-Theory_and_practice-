import {NgModule} from '@angular/core';
import {ColorDirective} from '../modules/shared/color.directive';
import {PageNamePipe} from '../modules/shared/page-name.pipe';
import {ExtraComponent} from '../routing/about/extra/extra.component';
import {HomePageComponent} from '../modules/home-page/home-page.component';

@NgModule({
  declarations: [
    ColorDirective,
    PageNamePipe,
    ExtraComponent,
    HomePageComponent
  ],
  exports: [
    ColorDirective,
    PageNamePipe,
    ExtraComponent
  ]
})
export class SharedModule {

}
