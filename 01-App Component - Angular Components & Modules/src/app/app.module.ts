import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';


// this is the decorator 
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ] // the bootstrap is the first one to choose for the ui
})
export class AppModule { }

/** the angualr CLI will add a bucket for us that declares the components for the bucket */