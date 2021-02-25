import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserServiceService } from 'src/app/utility/user-service.service';


@Component({
  selector: 'app-view-cart-item',
  templateUrl: './view-cart-item.component.html',
  styleUrls: ['./view-cart-item.component.scss']
})
export class ViewCartItemComponent implements OnInit {

userData:any

  @Input() foodItem: any = '';
  @Input() cartItem: any = '';

  @Output() onDecrease: EventEmitter<String>=new EventEmitter<String>();
  @Output() onIncrease: EventEmitter<String>=new EventEmitter<String>();
  @Output() onRemove: EventEmitter<String>=new EventEmitter<String>();

  constructor(private _userService: UserServiceService) { }

  ngOnInit(): void {

    console.log(this.foodItem);
    console.log(this.cartItem);
  }

  incrementItem(foodId:String){
    this.onIncrease.emit(foodId);
  }

  decrementItem(foodId: String) {
      this.onDecrease.emit(foodId)
  }

  removeItem(foodId:String){
      this.onRemove.emit(foodId);
  }

}
