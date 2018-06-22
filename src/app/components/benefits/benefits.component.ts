import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../store.service';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.css']
})
export class BenefitsComponent implements OnInit {
  data;
  constructor(private storeService: StoreService) { }

  ngOnInit() {
    this.data = this.storeService.store;
  }

}
