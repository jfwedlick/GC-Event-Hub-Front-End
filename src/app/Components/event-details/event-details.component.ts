import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../../Services/events.service';
import { Subscription } from 'rxjs';
import { EventInfo } from '../../Interfaces/event';

@Component({
  selector: 'app-event-details',
  standalone: true,
  imports: [],
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.css'
})
export class EventDetailsComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private eventService: EventsService) { }

  paramsSubscription!: Subscription
  eventInfo: EventInfo | null = null;
  
  ngOnInit(): void {

    this.paramsSubscription = this.activatedRoute.params.subscribe(params => {

      const id = params['id'];

      this.eventService.getEvent(id).subscribe(event => {
        this.eventInfo = event;
      });

    })

  }

}
