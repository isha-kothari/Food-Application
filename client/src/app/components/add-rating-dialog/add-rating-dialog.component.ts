import { Component, OnInit } from '@angular/core';
import { StarRatingComponent } from 'ng-starrating';

@Component({
  selector: 'app-add-rating-dialog',
  templateUrl: './add-rating-dialog.component.html',
  styleUrls: ['./add-rating-dialog.component.scss']
})
export class AddRatingDialogComponent implements OnInit {

  value:number = 0;
  totalstars:number = 0;
  readonly:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onRate($event: { oldValue: number, newValue: number, starRating: StarRatingComponent }) {
      this.value = $event.newValue;
  }

  applyRating(){
    console.log(this.value);
  }
}
