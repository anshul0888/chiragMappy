import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-vitrual-tour',
  templateUrl: './vitrual-tour.component.html',
  styleUrls: ['./vitrual-tour.component.css']
})
export class VitrualTourComponent implements OnInit {
  virtualTourForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.virtualTourForm = new FormGroup({
      contactFormName: new FormControl(),
      contactFormEmail: new FormControl(),
      contactFormSubject: new FormControl(),
      contactFormMessage: new FormControl()
    });
  }

}
