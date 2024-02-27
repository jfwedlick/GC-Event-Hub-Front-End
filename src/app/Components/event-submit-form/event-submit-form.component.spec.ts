import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSubmitFormComponent } from './event-submit-form.component';

describe('EventSubmitFormComponent', () => {
  let component: EventSubmitFormComponent;
  let fixture: ComponentFixture<EventSubmitFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventSubmitFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventSubmitFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
