import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { CustomersModule } from './customers/customers.module';
import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { OrdersModule } from './orders/orders.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports:      [ BrowserModule, CustomersModule, OrdersModule, SharedModule, CoreModule, AppRoutingModule, NgbModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }