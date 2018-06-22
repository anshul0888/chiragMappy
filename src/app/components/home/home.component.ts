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
  searchResults;
  clients;
  moreButtonLabel;
  moreButtonClicked: boolean;
  constructor(private storeService: StoreService) { }

  ngOnInit() {
    this.searchResults = false;
    this.data = this.storeService.store;
    this.searchForm = new FormGroup({
      searchBox: new FormControl()
    });
    this.moreButtonClicked = false;
    this.onMoreClient();
  }
  
  onMoreClient() {
    if (this.moreButtonClicked) {
      this.moreButtonLabel = 'less';
      this.clients = this.storeService.store.ourClients.slice(0);
    } else {
      this.clients = this.storeService.store.ourClients.slice(0,3);
      this.moreButtonLabel = 'more';
    }
    this.moreButtonClicked = !this.moreButtonClicked;
  }

  onSearch() {
    this.searchResults = true;
    console.log(this.searchForm.value);
  }

}
