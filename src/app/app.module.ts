import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventEmitterParentComponent,
         EventEmitterChildComponent,
         IntroductionComponent } from './_components/index';
import { AppRoutingModule } from './_modules/index';

@NgModule({
  declarations: [
    AppComponent,
    EventEmitterParentComponent,
    EventEmitterChildComponent,
    IntroductionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
