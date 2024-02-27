import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfFavoritesComponent } from './list-of-favorites.component';

describe('ListOfFavoritesComponent', () => {
  let component: ListOfFavoritesComponent;
  let fixture: ComponentFixture<ListOfFavoritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListOfFavoritesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListOfFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
