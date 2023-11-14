import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { EluIComponent } from './elujoudIntrp.component';
import { StruktComponent } from './matrixStrukt/matrixStrukt.component';
import { MaksevoimComponent } from './matrixMaksevoim/matrixMaksevoim.component';
import { RentaablComponent } from './matrixRentaabl/matrixRentaabl.component';
import { EfektComponent } from './matrixEfekt/matrixEfekt.component';
import { LaenComponent } from './matrixLaen/matrixLaen.component';



@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      //{ path: '', component: ProductListComponent },
    ])
  ],
  declarations: [
    EluIComponent,
    StruktComponent,
    MaksevoimComponent,
    RentaablComponent,
    EfektComponent,
    LaenComponent
    
  ],
  bootstrap: [
    EluIComponent
  ]
})
export class EluIModule { }