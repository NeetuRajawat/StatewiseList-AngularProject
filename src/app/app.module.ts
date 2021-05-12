import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllStateComponent } from './components/all-state/all-state.component';
import { FirstStateComponent } from './components/first-state/first-state.component';
import { SecondStateComponent } from './components/second-state/second-state.component';

@NgModule({
  declarations: [
    AppComponent,
    AllStateComponent,
    FirstStateComponent,
    SecondStateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
