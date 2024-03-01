import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FavoritesService } from '../../Services/favorites.service';
import { CommonModule } from '@angular/common';

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
    private router: Router) { }

    favorites$ = this.favoritesService.getFavorites();

    deleteFavorite(id: number) {
      this.favoritesService.deleteFavorite(id).subscribe(() => {
        this.favorites$ = this.favoritesService.getFavorites();
      })
    }

    
}
