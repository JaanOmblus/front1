import 'zone.js';
import {Component} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';

//@Component({
//  selector: 'app-root',
//  standalone: true,
//  template: `
//    <h1>Elujõulisuse indeks {{ name }}.</h1>
//    <a>
//      Kuidas Front-End sisendit tõlgendab
//    </a>
//  `,
//})
//export class App {
//  name = 'InterpretationMatrix';
//}

//bootstrapApplication(App);


import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { EluIModule } from './elujoudIntrp/elujoudIntrp.module';

platformBrowserDynamic().bootstrapModule(EluIModule)
  .catch(err => console.error(err));
