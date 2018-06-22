import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-seo-sem',
  templateUrl: './seo-sem.component.html',
  styleUrls: ['./seo-sem.component.css']
})
export class SeoSemComponent implements OnInit {
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
