import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cocktail } from '../models/cocktail';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CocktailFetcherService {
  private apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/';

  constructor(private http: HttpClient) { }

  getAllCocktails(): Observable<Cocktail[]> {
    return this.http.get<Cocktail[]>(this.apiUrl + 'search.php?s=')
        .pipe(map((res: any) => {
          if (res.hasOwnProperty('drinks')) {
            return res.drinks.map(data => new Cocktail(data));
          } else {
            return [];
          }
        }));
  }
}
