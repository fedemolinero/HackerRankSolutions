// Create a new Angular project

// Replace contents of src/index.html with the following:
// <app-main></app-main>

// Replace contents of src/main.ts with the following:
import './polyfills';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { VERSION } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Starting template, when copying to the TestDome environment, don't copy anything before this comment:
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  //Update this template
  template: '<p>Total count: {{ countString }}</p>',
  styles: []
})
export class Summary {
  @Input() count: number;
  countString: string;
  
  constructor() {
    this.countString = `this.count`;
    console.log('countString is ' + this.countString);
  }
}
// When copying to the TestDome environment, don't copy anything after this comment

// Main component
@Component({
  selector: 'app-main',
  template: `<app-root [count]="1"></app-root>`
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
}
// Module declaration
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, Summary ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
// Bootstrapping Angular
platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
  if (window['ngRef']) {
    window['ngRef'].destroy();
  }
  window['ngRef'] = ref;
}).catch(err => console.error(err));