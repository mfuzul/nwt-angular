import { TestBed } from '@angular/core/testing';

import { CocktailFetcherService } from './cocktail-fetcher.service';

describe('CocktailFetcherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CocktailFetcherService = TestBed.get(CocktailFetcherService);
    expect(service).toBeTruthy();
  });
});
