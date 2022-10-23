import { Beer } from 'src/app/shared/models/beer';
import { Component, OnInit } from '@angular/core';
import { FlapoProductsApiService } from 'src/app/shared/services/flapo-products-api/flapo-products-api.service';
import { SortType } from 'src/app/shared/models/sortTypes';

@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.component.html',
})
export class DetailedComponent implements OnInit {
  constructor(private flapoProductsApiService: FlapoProductsApiService) {}

  beers: Beer[] = [];
  sortType: SortType | undefined = undefined;
  maxPricePerLiter: number | undefined = undefined;

  ngOnInit(): void {
    this.fetchBeers();
  }

  onSortTypeChange(sortType: SortType) {
    this.sortType = sortType;
    this.fetchBeers();
  }

  private fetchBeers() {
    this.flapoProductsApiService
      .getBeers(this.sortType)
      .subscribe((beers) => (this.beers = beers));
  }
}
