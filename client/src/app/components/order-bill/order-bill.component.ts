import { Component, OnInit } from '@angular/core';
import { RestaurantServiceService } from 'src/app/utility/restaurant-service.service';
import { UserServiceService } from 'src/app/utility/user-service.service';
import { MatDialog } from '@angular/material/dialog';
import { AddAddressComponent } from '../add-address/add-address.component';

@Component({
  selector: 'app-order-bill',
  templateUrl: './order-bill.component.html',
  styleUrls: ['./order-bill.component.scss']
})
export class OrderBillComponent implements OnInit {

  restaurantData: any = "";
  restaurantId: String = "";
  userCart: any = "";
  userObs;

  constructor(private _userService: UserServiceService, private _restaurantService: RestaurantServiceService, public dialog: MatDialog) {
    this.userObs = this._userService.getUser().subscribe((user) => {
      if (user?.cart != undefined && user?.cart != null) {


        this.restaurantId = user.cart.restaurantId
        this.userCart = user.cart.foodList;


        console.log("cart :    00000", this.userCart);

        this._restaurantService.getRestaurantById(this.restaurantId).then((data) => {
          this.restaurantData = data;
        });
      } else {
        this.userCart = [];
      }
    });
  }

  ngOnInit(): void {

  }



  foodItemOfId(id: string): any {
    return this.restaurantData.menuDetails.find((food:any) => {
      return food._id == id
    });
  }

  getSubTotal(): number {
    let total = 0;
    if(this.userCart!=undefined && this.restaurantData?.menuDetails.length!=0)
    {
      
      this.userCart.forEach((cartItem: any) => {
        let foodItem = this.foodItemOfId(cartItem.foodId);
        // console.log("foodPrice***********",foodItem,cartItem);
        
        total += foodItem.foodPrice * cartItem.quantity;
      })
    }
    return total;
  }

  addAddress(){
    const dialogRef = this.dialog.open(AddAddressComponent);
    dialogRef.afterClosed().subscribe(result => {
      
      // this.rating = result;      
    });
  }

}
