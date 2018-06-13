import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../store.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data;
  searchForm: FormGroup;
  constructor(private storeService: StoreService) { }

  ngOnInit() {
    this.data = this.storeService.store;
    this.searchForm = new FormGroup({
      searchBox: new FormControl()
    });
  }

  onSearch() {
    console.log(this.searchForm.value);
  }

}
