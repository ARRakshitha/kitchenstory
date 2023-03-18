import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdditemComponent } from './additem/additem.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { HomeComponent } from './home/home.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { UpdateItemComponent } from './update-item/update-item.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    AdditemComponent,
    AdminLoginComponent,
    AllOrdersComponent,
    HomeComponent,
    PlaceOrderComponent,
    UpdateItemComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
