import { Component, OnInit } from '@angular/core';
import { Beer } from 'src/app/shared/models/beer';
import { FlapoProductsApiService } from 'src/app/shared/services/flapo-products-api/flapo-products-api.service';

@Component({
  selector: 'app-compact',
  templateUrl: './compact.component.html',
})
export class CompactComponent implements OnInit {
  constructor(private flapoProductsApiService: FlapoProductsApiService) {}

  beers: Beer[] = [];

  ngOnInit(): void {
    this.flapoProductsApiService
      .getBeers()
      .subscribe((beers) => (this.beers = beers));
  }
}
