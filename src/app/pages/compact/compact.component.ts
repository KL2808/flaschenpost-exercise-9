import { Component, OnInit } from '@angular/core';
import { Beer } from 'src/app/shared/models/beer';
import { SortType } from 'src/app/shared/models/sortTypes';
import { FlapoProductsApiService } from 'src/app/shared/services/flapo-products-api/flapo-products-api.service';

@Component({
  selector: 'app-compact',
  templateUrl: './compact.component.html',
})
export class CompactComponent implements OnInit {
  constructor(private flapoProductsApiService: FlapoProductsApiService) {}

  beers: Beer[] = [];
  sortType: SortType | undefined = undefined;
  maxPricePerLiter: number | undefined = undefined;

  ngOnInit(): void {
    this.fetchBeers();
  }

  onPriceLimitChange(isPriceLimit: boolean) {
    if (isPriceLimit) this.maxPricePerLiter = 2;
    else this.maxPricePerLiter = undefined;
    this.fetchBeers();
  }

  onSortTypeChange(sortType: SortType) {
    this.sortType = sortType;
    this.fetchBeers();
  }

  private fetchBeers() {
    this.flapoProductsApiService
      .getBeers(this.sortType, this.maxPricePerLiter)
      .subscribe((beers) => (this.beers = beers));
  }
}
