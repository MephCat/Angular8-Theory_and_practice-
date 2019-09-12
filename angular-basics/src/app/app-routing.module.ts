import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BasicsComponent} from './basics/basics.component';
import {AddFeaturesComponent} from './add-features/add-features.component';
import {BasicRxjsComponent} from './basic-rxjs/basic-rxjs.component';
import {ComponentInDetailsComponent} from './component-in-details/component-in-details.component';
import {DirectivesComponent} from './directives/directives.component';
import {FormsValidationsComponent} from './forms-validations/forms-validations.component';
import {HttpClientComponent} from './http-client/http-client.component';
import {ModulesComponent} from './modules/modules.component';
import {PipesComponent} from './pipes/pipes.component';
import {RoutingComponent} from './routing/routing.component';
import {ServicesComponent} from './services/services.component';
import {TsForAngularComponent} from './ts-for-angular/ts-for-angular.component';
import {AboutComponent} from './routing/about/about.component';
import {PostsComponent} from './routing/posts/posts.component';
import {HomeComponent} from './routing/home/home.component';
import {PostRoutingComponent} from './routing/post-routing/post-routing.component';
import {ExtraComponent} from './routing/about/extra/extra.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {AuthGuerd} from './routing/auth.guard';


const routes: Routes = [
  {path: '', component: BasicsComponent},
  {path: 'add-features', component: AddFeaturesComponent },
  {path: 'basic-rxjs', component: BasicRxjsComponent},
  {path: 'component-in-details', component: ComponentInDetailsComponent},
  {path: 'directives', component: DirectivesComponent},
  {path: 'forms-validations', component: FormsValidationsComponent},
  {path: 'http-client', component: HttpClientComponent},
  {path: 'modules', component: ModulesComponent},
  {path: 'pipes', component: PipesComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'ts-for-angular', component: TsForAngularComponent},
  //for routing component
  {path: 'routing', component: RoutingComponent, children:[
      {path: 'home', component: HomeComponent},
      {path: 'about', component: AboutComponent, canActivateChild: [AuthGuerd], children: [
          {path: 'extra', component: ExtraComponent}
        ]},
      {path: 'posts', component: PostsComponent, canActivate: [AuthGuerd]},
      {path: 'posts/:id', component: PostRoutingComponent}
    ]
  },
  {path: 'error', component: ErrorPageComponent},
  {path: '**', redirectTo: 'error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
