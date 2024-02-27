import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Favorite, SubmitFavorite } from '../Interfaces/favorite';
import { Observable } from 'rxjs';
import { EventsService } from './events.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  constructor(private httpClient: HttpClient) { }

  baseUrl = `${environment.apiDomain}/api/Favorites`;

  getFavorites(username: string): Observable<Favorite> {
    return this.httpClient.get<Favorite>(`${this.baseUrl}/${username}`);
  }

  deleteFavorite(id: number) {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

  postFavorite(newFav: SubmitFavorite): Observable<Favorite> {
    return this.httpClient.post<Favorite>(this.baseUrl, newFav);
  }

  updateEvent(updatedEvent: Favorite, id: number | null) {
    return this.httpClient.put(`${this.baseUrl}/${id}`, updatedEvent);
  }
}
