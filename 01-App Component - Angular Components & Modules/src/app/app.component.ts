/**we have the component decorator and the OnInit  Interface*/
import { Component, OnInit } from '@angular/core';

@Component({ 
  /** app-root will be the main startup for the component, the root will be the first component that
   *  will start up the page and that's where you see it in the html
   */
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
  `
})

/** this component will get a contract class that is implemented 
 *  OnInit is what Angular provides for typscript
*/
export class AppComponent implements OnInit {
  title: string; // this is where typescript comes in
  constructor() { }

  ngOnInit() {
    // We call a service that gets us the data
    // this is where we initialize the component with data
    this.title = 'Hello World';
  }
  
}