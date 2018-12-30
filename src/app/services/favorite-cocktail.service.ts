import { Injectable } from '@angular/core';
import { Cocktail } from '../models/cocktail';

@Injectable({
  providedIn: 'root'
})
export class FavoriteCocktailService {
  private favoriteCocktails: Cocktail[] = [];

  constructor() {}

  add(cocktail: Cocktail): boolean {
    if (!this.favoriteCocktails.find(favoriteCocktail => favoriteCocktail.idDrink === cocktail.idDrink)) {
      this.favoriteCocktails.push(cocktail);

      return true;
    } else {
      this.favoriteCocktails.splice(
          this.favoriteCocktails.indexOf(cocktail),
          1
      );

      return false;
    }
  }

  getCocktails(): Cocktail[] {
    return this.favoriteCocktails;
  }

}
