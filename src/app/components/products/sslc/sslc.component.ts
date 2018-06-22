import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sslc',
  templateUrl: './sslc.component.html',
  styleUrls: ['./sslc.component.css']
})
export class SslcComponent implements OnInit {
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
