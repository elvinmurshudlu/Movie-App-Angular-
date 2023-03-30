import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenresBannerComponent } from './genres-banner.component';

describe('GenresBannerComponent', () => {
  let component: GenresBannerComponent;
  let fixture: ComponentFixture<GenresBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenresBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenresBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
