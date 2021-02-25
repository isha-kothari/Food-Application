import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { UserServiceService } from 'src/app/utility/user-service.service';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.scss']
})
export class FoodItemComponent implements OnInit, OnDestroy {

  @Input() foodData: any;

  userData: any;
  userObs: any;

  constructor(private _userService: UserServiceService, private _itemprice: MatSnackBar) { }

  ngOnInit(): void {


    this.userObs = this._userService.getUser().subscribe((user) => {
      this.userData = user;
    })
  }
  ngOnDestroy() {
    this.userObs.unsubscribe();
  }


  price: number = 400;

  isFoodInCart(id: String): number {
    return this.userData.cart.foodList.findIndex((item: any) => item.foodId == id);
  }

  incrementItem(foodId: String) {
    let foodItem = {
      foodId: foodId,
      restaurantId: this.foodData.restaurantId
    }

    console.log(foodItem);
    this._userService.incrementCartItem(foodItem).subscribe(async (data) => {
      await this._userService.updateUserDataLocal();
      // this.userData = await this._userService.getUser();
    });

    this.addtocart(this.foodData.food.foodPrice)




  }

  decrementItem(foodId: String) {
    let foodItem = {
      foodId: foodId,
      restaurantId: this.foodData.restaurantId
    }
    this._userService.decrementCartItem(foodItem).subscribe(async (data) => {
      await this._userService.updateUserDataLocal();
      // this.userData= await this._userService.getUser();
    })
  }


  addtocart(price: number) {
    this._itemprice.open("1 Item added to Cart!", "Price: " + price.toString(), {
      duration: 3000,
    })
  }


  // avgRating: Number = 0
  // ratingAvg(): Number {
  //   this.avgRating = this.foodData.foodRating.reduce((total:number, current:any) => total + current.rating, 0) / this.foodData.foodRating.length;
  //   return this.avgRating ;
  // }

}
