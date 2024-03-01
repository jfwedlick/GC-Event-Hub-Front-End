import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { EventGet, EventInfo, SubmitEventInfo } from '../Interfaces/event';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private httpClient: HttpClient) { }

  baseUrl = `${environment.apiDomain}/api/Events`;

  getEvents() {
    return this.httpClient.get<EventGet[]>(this.baseUrl)
  }

  getEvent(id: number): Observable<EventInfo> {
    return this.httpClient.get<EventInfo>(`${this.baseUrl}/${id}`);
  }

  deleteEvent(id: number) {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

  postEvent(newEvent: SubmitEventInfo): Observable<EventInfo> {
    return this.httpClient.post<EventInfo>(this.baseUrl, newEvent);
  }

  updateEvent(updatedEvent: EventInfo, id: number | null) {
    return this.httpClient.put(`${this.baseUrl}/${id}`, updatedEvent);
  }


}
