import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-business-email',
  templateUrl: './business-email.component.html',
  styleUrls: ['./business-email.component.css']
})
export class BusinessEmailComponent implements OnInit {
  productForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.productForm = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      mobile: new FormControl(),
      subject: new FormControl(),
      category: new FormControl(),
      message: new FormControl()
    });
  }

}
