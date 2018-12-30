import { Component, Input, OnInit } from '@angular/core';
import { Cocktail } from '../../models/cocktail';
import { FavoriteCocktailService } from '../../services/favorite-cocktail.service';
import {ReviewService} from '../../services/review.service';
import {Review} from '../../models/review';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.less']
})
export class ArticleComponent implements OnInit {
  @Input()
  cocktail: Cocktail;
  ingredients: Array<number> = [];
  reviews: Review[];
  rating: number;
  favorite: boolean;

  constructor(
      private favoritesService: FavoriteCocktailService,
      private reviewService: ReviewService
  ) { }

  ngOnInit() {
    for (let i = 1; i <= 15; i++) {
      this.ingredients.push(i);
    }

    this.reviews = this.reviewService.getReviewsByCocktail(this.cocktail);
    const sum = this.reviews.map(review => review.rating)
        .reduce((accumulator, rating) => accumulator + rating);

    this.rating = parseFloat(
        Math.round(
            parseFloat((sum / this.reviews.length) + 'e+2')
        ) + 'e-2'
    );

    this.favorite = !!this.favoritesService.getCocktails()
        .find(cocktail => cocktail.idDrink === this.cocktail.idDrink);

    console.log(this.favorite);
  }

  showIngredient(cocktail: Cocktail, index: number): boolean {
    const measure = `strMeasure${index}`;
    const ingredient = `strIngredient${index}`;

    return cocktail[measure] && cocktail[ingredient];
  }

  public addToFavorites(cocktail: Cocktail) {
    this.favorite = this.favoritesService.add(cocktail);
  }

}
