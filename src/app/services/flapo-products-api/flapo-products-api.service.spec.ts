import { TestBed } from '@angular/core/testing';

import { FlapoProductsApiService } from './flapo-products-api.service';

describe('FlapoProductsApiService', () => {
  let service: FlapoProductsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlapoProductsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
