import { Component } from '@angular/core';
import { EventsService } from '../../Services/events.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { EventInfo } from '../../Interfaces/event';
import { FavoritesService } from '../../Services/favorites.service';
import { Favorite } from '../../Interfaces/favorite';

@Component({
  selector: 'app-list-of-events',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list-of-events.component.html',
  styleUrl: './list-of-events.component.css'
})
export class ListOfEventsComponent {

  constructor(
    private eventsService: EventsService, 
    private favoriteEvents: FavoritesService,
    private router: Router) { }

  events$ = this.eventsService.getEvents();
  favoriteEvents$ = this.favoriteEvents.getFavorites();

  deleteEvent(id: number) {
    this.eventsService.deleteEvent(id).subscribe(() => {
      this.events$ = this.eventsService.getEvents();
    })
  }

  updateEvent(id: number, event: EventInfo) {
    this.router.navigate(['eventsubmitform', id], { queryParams: event });
  }

  favoriteEvent(id: Favorite){
    this.favoriteEvents.postFavorite(id).subscribe(() => {
      this.events$ = this.eventsService.getEvents();
      this.favoriteEvents$ = this.favoriteEvents.getFavorites();
    })   
  }

}
