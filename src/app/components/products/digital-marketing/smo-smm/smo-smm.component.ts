import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-smo-smm',
  templateUrl: './smo-smm.component.html',
  styleUrls: ['./smo-smm.component.css']
})
export class SmoSmmComponent implements OnInit {
  productForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.productForm = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      mobile: new FormControl(),
      subject: new FormControl(),
      category: new FormControl(),
      message: new FormControl(),
      facebook: new FormControl(),
      instagram: new FormControl(),
      linkedIn: new FormControl(),
      twitter: new FormControl(),
      pinInterest: new FormControl(),
      whatsAppMarketing: new FormControl(),
    });
  }

  onSubmit() {
    console.log(this.productForm.value);
  }

}
