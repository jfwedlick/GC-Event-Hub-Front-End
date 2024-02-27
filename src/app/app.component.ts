import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ListOfEventsComponent } from './Components/list-of-events/list-of-events.component';
import { ListOfFavoritesComponent } from './Components/list-of-favorites/list-of-favorites.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule, ListOfEventsComponent, ListOfFavoritesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 

  
}
