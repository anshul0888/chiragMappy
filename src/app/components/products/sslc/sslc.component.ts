import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sslc',
  templateUrl: './sslc.component.html',
  styleUrls: ['./sslc.component.css']
})
export class SslcComponent implements OnInit {
  sslcForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.sslcForm = new FormGroup({
      contactFormName: new FormControl(),
      contactFormEmail: new FormControl(),
      contactFormSubject: new FormControl(),
      contactFormMessage: new FormControl()
    });
  }

}
