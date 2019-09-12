import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutPageComponent} from './about-page.component';
import {ExtraComponent} from '../../routing/about/extra/extra.component';
import {HomePageComponent} from '../home-page/home-page.component';

const routes: Routes = [
    {path: '', component: AboutPageComponent, children: [
        {path: 'extra', component: ExtraComponent}
      ]},
    {path: 'home', component: HomePageComponent}
]
@NgModule({
  imports:  [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class AboutPageRoutingModule {

}
