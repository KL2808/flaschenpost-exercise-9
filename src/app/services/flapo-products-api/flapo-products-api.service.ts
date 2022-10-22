import { Beer } from './../../models/beer';
import { Article } from './../../models/article';
import { Brand } from './../../models/brand';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { flatMap } from 'rxjs/internal/operators/flatMap';
import { mergeMap } from 'rxjs/internal/operators/mergeMap';
import { tap } from 'rxjs/internal/operators/tap';
import { environment } from 'src/environments/environment';

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
