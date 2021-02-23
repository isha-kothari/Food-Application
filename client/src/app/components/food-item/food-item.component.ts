import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserServiceService } from 'src/app/utility/user-service.service';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.scss']
})
export class FoodItemComponent implements OnInit {

  @Input() foodData: any;

  cartItemIndex: number = -1;
  userData: any;

  constructor(private _userService: UserServiceService, private _itemprice: MatSnackBar) { }

  ngOnInit(): void {
    this._userService.getUser().then((data) => {
      this.userData = data;

      this.cartItemIndex=this.isFoodInCart(this.foodData.food._id)
    });


  }

  price: number = 400;

  isFoodInCart(id: String): number {
    return this.userData.cart.foodList.findIndex((item: any) => item.foodId == id) ;
  }

  incrementItem(id:String){
      
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
