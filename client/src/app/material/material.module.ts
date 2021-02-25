import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatChipsModule} from '@angular/material/chips';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatGridListModule,
    MatButtonModule,
    MatTabsModule,
    MatChipsModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatButtonToggleModule,
    MatCardModule,
    MatDialogModule
  ],
  exports:[
    CommonModule,
    MatGridListModule,
    MatButtonModule,
    MatTabsModule,
    MatChipsModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatButtonToggleModule,
    MatCardModule,
    MatDialogModule
  ]
})
export class MaterialModule { }
