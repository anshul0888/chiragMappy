import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-e-commerce',
  templateUrl: './e-commerce.component.html',
  styleUrls: ['./e-commerce.component.css']
})
export class ECommerceComponent implements OnInit {
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
