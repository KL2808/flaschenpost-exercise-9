import { Component, Input, OnInit } from '@angular/core';
import { Beer } from 'src/app/shared/models/beer';

@Component({
  selector: 'app-compact-beer-card',
  templateUrl: './compact-beer-card.component.html',
})
export class CompactBeerCardComponent implements OnInit {
  @Input() beer: Beer | undefined;
  constructor() {}

  ngOnInit(): void {
    if (!this.beer)
      console.error(`No beer provided to CompactBeerCardComponent`);
  }
}
