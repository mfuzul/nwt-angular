import { Injectable } from '@angular/core';
import {Review} from '../models/review';
import {Cocktail} from '../models/cocktail';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  reviews: Review[] = [];

  constructor() { }

  public add(review: Review) {
    this.reviews.push(review);
  }

  public getReviewsByCocktail(cocktail: Cocktail) {
    return this.reviews.filter(review => {
      return review.cocktailId === cocktail.idDrink;
    });
  }

  public getReviews() {
    return this.reviews;
  }
}
