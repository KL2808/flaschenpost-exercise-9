import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortTypeToggleComponent } from './sort-type-toggle.component';

describe('SortTypeToggleComponent', () => {
  let component: SortTypeToggleComponent;
  let fixture: ComponentFixture<SortTypeToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SortTypeToggleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SortTypeToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
