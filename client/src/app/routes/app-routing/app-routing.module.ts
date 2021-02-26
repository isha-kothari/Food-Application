import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OrderBillComponent } from 'src/app/components/order-bill/order-bill.component';
import { RestaurantHomeComponent } from 'src/app/components/restaurant-home/restaurant-home.component';

const routes: Routes = [{ path: 'orderBill', component: OrderBillComponent},
{ path: 'restaurant/:id', component: RestaurantHomeComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
