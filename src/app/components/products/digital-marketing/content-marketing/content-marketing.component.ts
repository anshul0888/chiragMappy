import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-content-marketing',
  templateUrl: './content-marketing.component.html',
  styleUrls: ['./content-marketing.component.css']
})
export class ContentMarketingComponent implements OnInit {
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
