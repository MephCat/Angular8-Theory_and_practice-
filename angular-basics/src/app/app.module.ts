import { BrowserModule } from '@angular/platform-browser';
import {NgModule, Provider} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { Post4Component } from './post4/post4.component';
import { BasicsComponent } from './basics/basics.component';
import { ComponentInDetailsComponent } from './component-in-details/component-in-details.component';
import { PostFormComponent } from './component-in-details/post-form/post-form.component';
import { PostItemComponent } from './component-in-details/post-item/post-item.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { ServicesComponent } from './services/services.component';
import { FormsValidationsComponent } from './forms-validations/forms-validations.component';
import { HttpClientComponent } from './http-client/http-client.component';
import { RoutingComponent } from './routing/routing.component';
import { ModulesComponent } from './modules/modules.component';
import { AddFeaturesComponent } from './add-features/add-features.component';
import { StyleDirective } from './shared/directives/style.directive';
import { IfnotDirective } from './shared/directives/ifnot.directive';
import { MultByPipe } from './shared/pipes/mult-by.pipe';
import { ExMarksPipe } from './shared/pipes/ex-marks.pipe';
import { FilterPipe } from './shared/pipes/filter.pipe';
import {CounterService} from './shared/services/counter.service';
import { CounterComponent } from './services/counter/counter.component';
import { BasicRxjsComponent } from './basic-rxjs/basic-rxjs.component';
import { TsForAngularComponent } from './ts-for-angular/ts-for-angular.component';
import { SwitchComponent } from './forms-validations/switch/switch.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './http-client/auth.interceptor';
import { AboutComponent } from './routing/about/about.component';
import { PostsComponent } from './routing/posts/posts.component';
import { HomeComponent } from './routing/home/home.component';
import { PostRoutingComponent } from './routing/post-routing/post-routing.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import {SharedModule} from './shared/shared.module';
import {HomePageComponent} from './modules/home-page/home-page.component';
import { ModalComponent } from './add-features/modal/modal.component';
import {RefDirective} from './add-features/ref.directive';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

const INTRCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
};


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    Post4Component,
    BasicsComponent,
    ComponentInDetailsComponent,
    PostFormComponent,
    PostItemComponent,
    DirectivesComponent,
    PipesComponent,
    ServicesComponent,
    FormsValidationsComponent,
    HttpClientComponent,
    RoutingComponent,
    ModulesComponent,
    AddFeaturesComponent,
    StyleDirective,
    IfnotDirective,
    MultByPipe,
    ExMarksPipe,
    FilterPipe,
    CounterComponent,
    BasicRxjsComponent,
    TsForAngularComponent,
    SwitchComponent,
    AboutComponent,
    PostsComponent,
    HomeComponent,
    PostRoutingComponent,
    ErrorPageComponent,
    ModalComponent,
    RefDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    CounterService,
    INTRCEPTOR_PROVIDER
  ],
  entryComponents: [ModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
