import { Component } from '@angular/core';
import { EventsService } from '../../Services/events.service';
import { Router, RouterModule } from '@angular/router';
import { FavoritesService } from '../../Services/favorites.service';
import { Favorite } from '../../Interfaces/favorite';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { UserEvents } from '../../Interfaces/event';

@Component({
  selector: 'app-list-of-favorites',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list-of-favorites.component.html',
  styleUrl: './list-of-favorites.component.css'
})
export class ListOfFavoritesComponent {

  constructor(
    private favoritesService: FavoritesService,
    private eventsService: EventsService,
    private router: Router) { }

    userName: string = '';
    listUpdated: boolean = false;
    //submitInfo: SubmitFavorite[] = [];
    listOfUserEvents: UserEvents[] = [
      {usrEvent: true, eventId: 1, eventName: 'Event 1', favoriteId: 1, favorite: false},
      {usrEvent: false, eventId: 2, eventName: 'Event 2', favoriteId: 0, favorite: false},
      {usrEvent: true, eventId: 3, eventName: 'Event 3', favoriteId: 3, favorite: true},
      {usrEvent: true, eventId: 4, eventName: 'Event 4', favoriteId: 4, favorite: false},
      {usrEvent: true, eventId: 5, eventName: 'Event 5', favoriteId: 5, favorite: true},
      {usrEvent: false, eventId: 6, eventName: 'Event 6', favoriteId: 0, favorite: false},
      {usrEvent: false, eventId: 7, eventName: 'Event 7', favoriteId: 0, favorite: false}
    ];

    assignUserEvent (index: number) {
      this.listOfUserEvents[index].usrEvent = true;
      this.listOfUserEvents[index].favorite = false;
      this.listUpdated = true;
    }

    unassignUserEvent (index: number) {
      this.listOfUserEvents[index].usrEvent = false;
      this.listOfUserEvents[index].favorite = false;
      this.listUpdated = true;
    }

    likeUserEvent (index: number) {
      this.listOfUserEvents[index].favorite = true;
      this.listUpdated = true;
    }

    unlikeUserEvent (index: number) {
      this.listOfUserEvents[index].favorite = false;
      this.listUpdated = true;
    }

    handleSubmission(){
      /*
      if(this.listUpdated){
        for(usrEvent of this.listOfUserEvents; let index = $index; track index){
          const updatedFavorite = {
            eventid: number = usrEvent.eventid,
            username: string = this.userName,
            favorite: boolean = usrEvent.favorite
          }
          if(usrEvent.usrEvent && usrEvent.favoriteId == 0){
            this.favoritesService.postFavorite(updatedFavorite);
          }
          else{
            if(!usrEvent.usrEvent && usrEvent.favoriteId <> 0){
              this.favoritesService.deleteFavorite(usrEvent.favoriteId);
            }
            else{
              this.favoritesService.updateFavorite(updatedFavorite, usrEvent.favoriteId);
            }
          }      
        }
      }
      */
    }
}
