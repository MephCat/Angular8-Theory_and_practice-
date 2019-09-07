import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
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

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    Post4Component,
    BasicsComponent,
    ComponentInDetailsComponent,
    PostFormComponent,
    PostItemComponent,
    DirectivesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
