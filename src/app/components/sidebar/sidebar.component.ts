import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../../models/cocktail';
import { FavoriteCocktailService } from '../../services/favorite-cocktail.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent implements OnInit {
  favorites: Cocktail[] = [];

  constructor(private favoritesService: FavoriteCocktailService) { }

  ngOnInit() {
    this.favorites = this.favoritesService.getCocktails();
  }

}
