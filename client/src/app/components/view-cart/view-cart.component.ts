import { Component, Input, OnInit } from '@angular/core';
import { RestaurantServiceService } from 'src/app/utility/restaurant-service.service';
import { UserServiceService } from 'src/app/utility/user-service.service';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.scss']
})
export class ViewCartComponent implements OnInit {

  cartItems: Array<any> = [];
  restaurantFoodList: Array<any> = [];
  restaurantId: any = '';


  constructor(private _userService: UserServiceService, private _restaurantService: RestaurantServiceService) {
    this._userService.getUser().then((data) => {
      this.restaurantId = data.cart.restaurantId
      this.cartItems = data.cart.foodList;


      console.log("cart :    00000", this.cartItems);

      this._restaurantService.getRestaurantById(this.restaurantId).then((data) => {
        this.restaurantFoodList = data.menuDetails;
       
        console.log(this.restaurantFoodList);

      })
    })
  }
  ngOnInit(): void {
    // this.cartItems = await this._userService.getUser().
      // this.foodlist = this._restaurantService.getRestaurantById()

  }

  foodItemOfId(id:string):any{
    return this.restaurantFoodList.find((food)=>{
      return food._id ==id
    });
  }

  getSubTotal():number{
    let total=0;
    this.cartItems.forEach((cartItem:any)=>{
      let foodItem = this.foodItemOfId(cartItem.foodId);
      total+=foodItem.foodPrice *cartItem.quantity;
    })
    return total;
  }

}
