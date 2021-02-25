import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderBillComponent } from './components/order-bill/order-bill.component';
import { RestaurantHomeComponent } from './components/restaurant-home/restaurant-home.component';

const routes: Routes = [
  { path: 'orderBill', component: OrderBillComponent },
  { path: 'restaurant/:id', component: RestaurantHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
