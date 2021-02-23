import { Component, Input, OnInit } from '@angular/core';
import { RestaurantServiceService } from 'src/app/utility/restaurant-service.service';
import { UserServiceService } from 'src/app/utility/user-service.service';

@Component({
  selector: 'app-view-cart-item',
  templateUrl: './view-cart-item.component.html',
  styleUrls: ['./view-cart-item.component.scss']
})
export class ViewCartItemComponent implements OnInit {

  @Input() foodItem:any='';
  @Input() cartItem: any='';
  

  ngOnInit(): void {
  
  }

}
