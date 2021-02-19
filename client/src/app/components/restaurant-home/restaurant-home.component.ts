import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-restaurant-home',
  templateUrl: './restaurant-home.component.html',
  styleUrls: ['./restaurant-home.component.scss'],
  
})
export class RestaurantHomeComponent implements OnInit {

  constructor(private _itemprice : MatSnackBar) { }

  ngOnInit(): void {
  }

  price:number = 400;

  addtocart(price:number){
    this._itemprice.open("1 Item added to Cart!","Price: "+price.toString(), {
      duration:3000,
    })
  }

}
