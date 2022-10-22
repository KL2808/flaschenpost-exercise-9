import { Beer } from './../../../models/beer';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detailed-beer-card',
  templateUrl: './detailed-beer-card.component.html',
})
export class DetailedBeerCardComponent implements OnInit {
  @Input() beer: Beer | undefined;
  constructor() {}

  ngOnInit(): void {
    if (!this.beer)
      console.error(`No beer provided to DetailedBeerCardComponent`);
  }
}
