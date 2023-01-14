import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderSummaryModule } from './order-summary/order-summary.module';

@NgModule({
  declarations: [	
    AppComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OrderSummaryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
