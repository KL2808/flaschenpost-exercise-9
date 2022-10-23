import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SortType } from '../../models/sortTypes';

@Component({
  selector: 'shared-sort-type-toggle',
  templateUrl: './sort-type-toggle.component.html',
})
export class SortTypeToggleComponent {
  @Input() sortType!: SortType;
  @Output() sortTypeChange = new EventEmitter<SortType>();

  currentSortType: SortType | undefined;

  SortType = SortType;

  constructor() {
    this.currentSortType = this.sortType;
  }

  toggleSortType() {
    if (this.currentSortType == SortType.ASCENDING) {
      this.currentSortType = SortType.DESCENDING;
    } else {
      this.currentSortType = SortType.ASCENDING;
    }
    this.sortTypeChange.emit(this.currentSortType);
  }
}
