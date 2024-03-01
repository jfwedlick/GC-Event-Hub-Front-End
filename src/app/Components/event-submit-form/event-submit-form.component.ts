import { Component } from '@angular/core';
import { EventsService } from '../../Services/events.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-event-submit-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './event-submit-form.component.html',
  styleUrl: './event-submit-form.component.css'
})
export class EventSubmitFormComponent {
  constructor(
    private eventsService: EventsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  id: null | number = null;
  name: string = '';
  description: string = '';
  startDate!: Date;
  location: string = '';
  duration: number = 0;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.id = params['id'];

        this.activatedRoute.queryParams.subscribe((queryParams) => {
          this.name = queryParams['name'];
          this.description = queryParams['description'];
          this.startDate = queryParams['startDate'];
          this.location = queryParams['location'];
          this.duration = +queryParams['duration'];
        })
      }
    })
  }

  handleEventSubmission() {
    if (this.id) {
      this.updateEvent();
    } else {
      this.addEvent();
    }
  }

  updateEvent() {
    const updatedEvent = {
      id: this.id!,
      name: this.name,
      description: this.description,
      startDate: this.startDate,
      location: this.location,
      duration: this.duration
    }

    this.eventsService.updateEvent(updatedEvent, this.id!).subscribe(() => {
      this.router.navigate(['events']);
    })
  }

  addEvent() {

    // Add logic to prevent adding empty records
    const newEvent = {
      name: this.name,
      description: this.description,
      startDate: this.startDate,
      location: this.location,
      duration: this.duration
    };

    this.eventsService.postEvent(newEvent).subscribe(() => {
      this.router.navigate(['events']);
    });
  }
}
