import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactUsForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.contactUsForm = new FormGroup({
      contactFormName: new FormControl(),
      contactFormEmail: new FormControl(),
      contactFormSubject: new FormControl(),
      contactFormMessage: new FormControl()
    });
  }
  
}
