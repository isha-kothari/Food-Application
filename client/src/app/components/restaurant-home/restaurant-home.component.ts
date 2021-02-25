import { dashCaseToCamelCase, stringify } from '@angular/compiler/src/util';
import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

import { StarRatingComponent } from 'ng-starrating';
import { element } from 'protractor';
import { Observable } from 'rxjs';
import { RestaurantServiceService } from 'src/app/utility/restaurant-service.service';
import { UserServiceService } from 'src/app/utility/user-service.service';
import { AddRatingDialogComponent } from '../add-rating-dialog/add-rating-dialog.component';


@Component({
  selector: 'app-restaurant-home',
  templateUrl: './restaurant-home.component.html',
  styleUrls: ['./restaurant-home.component.scss'],

})
export class RestaurantHomeComponent implements OnInit, OnDestroy {

  restaurantData: any = "";
  foodData: any = "";
  restaurantId: string = "";
  // userId: any = "602a55efc358f7284c32af28";
  userData: any = "";
  userObs;
  rating:number = 0;

  constructor(private routes: ActivatedRoute, private _restaurantService: RestaurantServiceService, private _userService: UserServiceService, public dialog: MatDialog) {    
    routes.params.subscribe((param) => {
      this.restaurantId = param['id'];
    });
    // this.restaurantData=this._restaurantService.getRestaurantById(this.restaurantId);
    // this.userData = this._userService.getUser();
    this.userObs = this._userService.getUser().subscribe((user) => {
      // if(user==undefined){
      //   this._userService.updateUserDataLocal();
      // }
      // else{
      this.userData = user;
      // }
    });

    this._restaurantService.getRestaurantById(this.restaurantId).then((data) => {
      this.restaurantData = data;
      console.log("in rest :", this.restaurantData);
    });
  }


  ngOnInit(): void {

    this._restaurantService.getFoodByRestaurant(this.restaurantId).subscribe(res => {
      if (res != undefined) {
        this.foodData = res;
        console.log(this.foodData);
      }
    });

  }
  ngOnDestroy(): void {
    this.userObs.unsubscribe();
  }

  onRate($event: { oldValue: number, newValue: number, starRating: StarRatingComponent }) {
    alert(`Old Value:${$event.oldValue}, 
      New Value: ${$event.newValue}, 
      Checked Color: ${$event.starRating.checkedcolor}, 
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }

  getPopularDishes(): string[] {
    let data: string[] = [];
    this.foodData.forEach((element:any) => {
      data.push(element.food.foodName);
    });
    data = data.filter((data,idx) => idx < 4);
    return data;
  }

  addRating() {
    const dialogRef = this.dialog.open(AddRatingDialogComponent, {
      data :{rating:this.rating}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.rating = result;
    });
  }

}
