import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenresTvShowsComponent } from './genres-tv-shows.component';

describe('GenresTvShowsComponent', () => {
  let component: GenresTvShowsComponent;
  let fixture: ComponentFixture<GenresTvShowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenresTvShowsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenresTvShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
