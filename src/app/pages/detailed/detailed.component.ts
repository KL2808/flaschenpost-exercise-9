import { Beer } from 'src/app/shared/models/beer';
import { Component, OnInit } from '@angular/core';
import { FlapoProductsApiService } from 'src/app/shared/services/flapo-products-api/flapo-products-api.service';

@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.component.html',
})
export class DetailedComponent implements OnInit {
  constructor(private flapoProductsApiService: FlapoProductsApiService) {}

  beers: Beer[] = [];

  ngOnInit(): void {
    this.flapoProductsApiService
      .getBeers()
      .subscribe((beers) => (this.beers = beers));
  }
}
