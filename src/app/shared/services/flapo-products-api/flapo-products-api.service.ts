import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { environment } from 'src/environments/environment';
import { Brand } from 'src/app/models/brand';
import { Beer } from 'src/app/models/beer';

@Injectable({
  providedIn: 'root',
})
export class FlapoProductsApiService {
  constructor(private httpClient: HttpClient) {}

  getBrands(): Observable<Brand[]> {
    return this.httpClient.get(environment.flapoProductsURL) as Observable<
      Brand[]
    >;
  }

  getBeers(): Observable<Beer[]> {
    return this.getBrands().pipe(map(this.brandsToBeers));
  }

  private brandsToBeers(brands: Brand[]): Beer[] {
    let beers: Beer[] = [];
    brands.forEach((brand) => {
      brand.articles.forEach((article) => {
        let beer: Beer = {
          brand,
          article,
        };
        beers.push(beer);
      });
    });
    return beers;
  }
}
