import { Component, Input, OnInit } from '@angular/core';
import { Cocktail } from '../../models/cocktail';

@Component({
  selector: 'app-article-favorite',
  templateUrl: './article-favorite.component.html',
  styleUrls: ['./article-favorite.component.less']
})
export class ArticleFavoriteComponent implements OnInit {
  @Input()
  cocktail: Cocktail;

  constructor() { }

  ngOnInit() {
  }

}
