import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Favorite, FavoriteList } from '../Interfaces/favorite';
import { Observable } from 'rxjs';
import { EventsService } from './events.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  constructor(private httpClient: HttpClient) { }

  baseUrl = `${environment.apiDomain}/api/Favorites`;

  getFavorites(){
    return this.httpClient.get<FavoriteList[]>(this.baseUrl)
  }

  deleteFavorite(id: number) {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

  postFavorite(newFav: Favorite): Observable<Favorite> {
    return this.httpClient.post<Favorite>(this.baseUrl, newFav);
  }
}
