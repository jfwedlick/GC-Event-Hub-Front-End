import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfEventsComponent } from './list-of-events.component';

describe('ListOfEventsComponent', () => {
  let component: ListOfEventsComponent;
  let fixture: ComponentFixture<ListOfEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListOfEventsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListOfEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
