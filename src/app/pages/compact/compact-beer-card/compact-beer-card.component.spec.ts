import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompactBeerCardComponent } from './compact-beer-card.component';

describe('CompactBeerCardComponent', () => {
  let component: CompactBeerCardComponent;
  let fixture: ComponentFixture<CompactBeerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompactBeerCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompactBeerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
