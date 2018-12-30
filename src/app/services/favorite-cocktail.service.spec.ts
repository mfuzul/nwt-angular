import { TestBed } from '@angular/core/testing';

import { FavoriteCocktailService } from './favorite-cocktail.service';

describe('FavoriteCocktailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FavoriteCocktailService = TestBed.get(FavoriteCocktailService);
    expect(service).toBeTruthy();
  });
});
