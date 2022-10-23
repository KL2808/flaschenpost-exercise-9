import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { environment } from 'src/environments/environment';
import { Brand } from 'src/app/shared/models/brand';
import { Beer } from 'src/app/shared/models/beer';
import { SortType } from 'src/app/shared/models/sortTypes';
import { brandToBeers } from '../../utils/mappings/brands-to-beers.mapper';

@Injectable({
  providedIn: 'root',
})
export class FlapoProductsApiService {
  constructor(private httpClient: HttpClient) {}

  getBeers(sortType?: SortType, maxPricePerLiter?: number): Observable<Beer[]> {
    return this.getBrands().pipe(
      map(this.brandsToBeers),
      map((beers) => this.filterBeersByLiterPrice(beers, maxPricePerLiter)),
      map((beers) => this.sortBeersByLiterPrice(beers, sortType))
    );
  }

  getBrands(): Observable<Brand[]> {
    return this.httpClient.get(environment.flapoProductsURL) as Observable<
      Brand[]
    >;
  }

  private brandsToBeers(brands: Brand[]): Beer[] {
    return brands.flatMap((brand) => brandToBeers(brand));
  }

  private filterBeersByLiterPrice(
    beers: Beer[],
    maxPricePerLiter?: number
  ): Beer[] {
    if (maxPricePerLiter)
      return beers.filter((beer) => beer.pricePerLiter <= maxPricePerLiter);
    return beers;
  }

  private sortBeersByLiterPrice(beers: Beer[], sortType?: SortType): Beer[] {
    if (sortType === SortType.ASCENDING)
      return beers.sort((a, b) => {
        return a.pricePerLiter - b.pricePerLiter;
      });
    else if (sortType === SortType.DESCENDING)
      return beers.sort((a, b) => {
        return b.pricePerLiter - a.pricePerLiter;
      });
    else return beers;
  }
}
