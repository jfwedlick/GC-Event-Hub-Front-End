import { Component } from '@angular/core';
import { EventsService } from '../../Services/events.service';
import { Router } from '@angular/router';
import { FavoritesService } from '../../Services/favorites.service';
import { Favorite } from '../../Interfaces/favorite';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-of-favorites',
  standalone: true,
  imports: [],
  templateUrl: './list-of-favorites.component.html',
  styleUrl: './list-of-favorites.component.css'
})
export class ListOfFavoritesComponent {

  constructor(
    private eventsService: EventsService,
    private favoritesService: FavoritesService,
    private router: Router) { }

    userIdList: string = '';
    listOfFav: Favorite[] | null = null;

  handleSubmit(username: string) {
    console.log(this.userIdList);
    
        
  }

  getFavorites(username: string): Observable<Favorite>{
    return this.favoritesService.getFavorites(username);

  }

}
