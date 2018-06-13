import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.css']
})
export class DomainComponent implements OnInit {
  domainForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.domainForm = new FormGroup({
      contactFormName: new FormControl(),
      contactFormEmail: new FormControl(),
      contactFormSubject: new FormControl(),
      contactFormMessage: new FormControl()
    });
  }

}
