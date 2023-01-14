import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { ImgTopComponent } from './imgTop/imgTop.component';
import { TextMidComponent } from './textMid/textMid.component';
import { ProductoComponent } from './producto/producto.component';
import { BotonesComponent } from './botones/botones.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MainComponent,
    ImgTopComponent,
    TextMidComponent,
    ProductoComponent,
    BotonesComponent
  ],
  exports: [
    MainComponent,
    ImgTopComponent,
    TextMidComponent,
    ProductoComponent,
    BotonesComponent
  ]

})
export class OrderSummaryModule { }
