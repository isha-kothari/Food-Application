import { Component, OnInit, Output } from '@angular/core';

import { StarRatingComponent } from 'ng-starrating';
import { RestaurantServiceService } from 'src/app/utility/restaurant-service.service';
import { UserServiceService } from 'src/app/utility/user-service.service';


@Component({
  selector: 'app-restaurant-home',
  templateUrl: './restaurant-home.component.html',
  styleUrls: ['./restaurant-home.component.scss'],

})
export class RestaurantHomeComponent implements OnInit {

  restaurantData: any = "";
  foodData: any = "";
  id: string = "602ca48cf2697638d43f4f11";
  // userId: any = "602a55efc358f7284c32af28";
  userData: any = "";

  constructor(private _restaurantService: RestaurantServiceService, private _userService: UserServiceService) {
    // this.restaurantData=this._restaurantService.getRestaurantById(this.id);
    this.userData = this._userService.getUser();
    this._restaurantService.getRestaurantById(this.id).then((data) => {
      this.restaurantData = data;
      console.log("in rest :", this.restaurantData);
    });
  }

  ngOnInit(): void {


    this._restaurantService.getFoodByRestaurant(this.id).subscribe(res => {
      if (res != undefined) {
        this.foodData = res;
      }
    });

  }

  onRate($event: { oldValue: number, newValue: number, starRating: StarRatingComponent }) {
    alert(`Old Value:${$event.oldValue}, 
      New Value: ${$event.newValue}, 
      Checked Color: ${$event.starRating.checkedcolor}, 
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }
}
