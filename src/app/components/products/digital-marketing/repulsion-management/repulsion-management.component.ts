import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-repulsion-management',
  templateUrl: './repulsion-management.component.html',
  styleUrls: ['./repulsion-management.component.css']
})
export class RepulsionManagementComponent implements OnInit {
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
  onSubmit() {
    console.log(this.productForm.value);
  }

}
