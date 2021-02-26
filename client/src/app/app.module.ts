import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantHomeComponent } from './components/restaurant-home/restaurant-home.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { OrderBillComponent } from './components/order-bill/order-bill.component';
import { RatingModule } from 'ng-starrating';
import { FoodItemComponent } from './components/food-item/food-item.component';
import { ViewCartComponent } from './components/view-cart/view-cart.component';
import { ViewCartItemComponent } from './components/view-cart-item/view-cart-item.component';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import { UpperCaseConverterPipe } from './utility/upper-case-converter.pipe';
import { UpperCaseConverterButtonPipe } from './utility/upper-case-converter-button.pipe';
import { AddRatingDialogComponent } from './components/add-rating-dialog/add-rating-dialog.component'
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PureVegFilterPipe } from './utility/pure-veg-filter.pipe';
import { AddAddressComponent } from './components/add-address/add-address.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantHomeComponent,
    OrderBillComponent,
    FoodItemComponent,
    ViewCartComponent,
    ViewCartItemComponent,
    UpperCaseConverterPipe,
    UpperCaseConverterButtonPipe,
    AddRatingDialogComponent,
    PureVegFilterPipe,
    AddAddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    RatingModule,
    HttpClientModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
