import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedBeerCardComponent } from './detailed-beer-card.component';

describe('DetailedBeerCardComponent', () => {
  let component: DetailedBeerCardComponent;
  let fixture: ComponentFixture<DetailedBeerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedBeerCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailedBeerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
