import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllStateComponent } from './components/all-state/all-state.component';
import { FirstStateComponent } from './components/first-state/first-state.component';
import { SecondStateComponent } from './components/second-state/second-state.component';
import { ThirdStateComponent } from './components/third-state/third-state.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    AllStateComponent,
    FirstStateComponent,
    SecondStateComponent,
    ThirdStateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
