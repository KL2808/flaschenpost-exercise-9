import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'shared-price-limit-toggle',
  templateUrl: './price-limit-toggle.component.html',
})
export class PriceLimitToggleComponent {
  @Input() state: boolean = false;
  @Output() stateChange = new EventEmitter<boolean>();

  currentState: boolean;

  constructor() {
    this.currentState = this.state;
  }

  toggleState() {
    this.currentState = !this.currentState;
    this.stateChange.emit(this.currentState);
  }
}
