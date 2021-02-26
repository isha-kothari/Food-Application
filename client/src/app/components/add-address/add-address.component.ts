import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { FormBuilder, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.scss']
})
export class AddAddressComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addressForm = new FormGroup({
    streetAddress: new FormControl(''),
    landmark: new FormControl(''),
    area: new FormControl(''),
    city: new FormControl(''),
    zip: new FormControl(''),
    state: new FormControl(''),
    country: new FormControl(''),
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.addressForm.value);
  }

}
