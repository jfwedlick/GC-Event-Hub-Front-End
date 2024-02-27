import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { ListOfEventsComponent } from './Components/list-of-events/list-of-events.component';
import { ListOfFavoritesComponent } from './Components/list-of-favorites/list-of-favorites.component';
import { EventDetailsComponent } from './Components/event-details/event-details.component';
import { EventSubmitFormComponent } from './Components/event-submit-form/event-submit-form.component';

export const routes: Routes = [
    {
		path: 'events',
		component: ListOfEventsComponent
	},
    {
		path: 'favorites',
		component: ListOfFavoritesComponent
	},
	{
		path: 'event/:id',
		component: EventDetailsComponent
	},
	{
		path: 'eventsubmitform',
		component: EventSubmitFormComponent
	},
	{
		path: 'eventsubmitform/:id',
		component: EventSubmitFormComponent
	},
    {   path: '', 
	    redirectTo: 'events', 
		pathMatch: 'full' },
	{
		path: '**', 
		component: PageNotFoundComponent
	}
];
