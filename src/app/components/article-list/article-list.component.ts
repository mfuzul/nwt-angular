import { Component, OnInit } from '@angular/core';
import { CocktailFetcherService } from '../../services/cocktail-fetcher.service';
import { Cocktail } from '../../models/cocktail';
import { Observable } from 'rxjs';
import { ReviewService } from '../../services/review.service';
import { Review } from '../../models/review';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.less']
})
export class ArticleListComponent implements OnInit {
  cocktails: Observable<Cocktail[]>;

  constructor(
      private cocktailFetcher: CocktailFetcherService,
      private reviewService: ReviewService
  ) { }

  ngOnInit() {
    this.cocktails = this.cocktailFetcher.getAllCocktails();
    this.cocktails.subscribe(
        cocktails => {
            cocktails.forEach(cocktail => {
                for (let i = 0; i <= Math.round(5 * Math.random()); i++) {
                    this.reviewService.add(new Review({
                        'cocktailId': cocktail.idDrink,
                        'rating': Math.round(5 * Math.random()),
                        'user': 'admin',
                        'message': 'Lorem ipsum dolor sit amet',
                    }));
                }
            });
        }
    );
  }

}
