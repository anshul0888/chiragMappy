import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-business-email',
  templateUrl: './business-email.component.html',
  styleUrls: ['./business-email.component.css']
})
export class BusinessEmailComponent implements OnInit {
  businessEmailForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.businessEmailForm = new FormGroup({
      contactFormName: new FormControl(),
      contactFormEmail: new FormControl(),
      contactFormSubject: new FormControl(),
      contactFormMessage: new FormControl()
    });
  }

}
