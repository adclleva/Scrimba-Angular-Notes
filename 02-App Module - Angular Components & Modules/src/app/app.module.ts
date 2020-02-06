//the technical term for a bucket is a module
// we need to register the components in a module 
import { NgModule }      from '@angular/core';

// these are the directives
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

// this here is a decorator that provides meta-data
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }