import { Component, input } from '@angular/core';

@Component({
  selector: 'vb-card-body',
  standalone: true,
  template: `
    <div class="vb-card__body" [class.vb-card__body--no-padding]="noPadding()">
      <ng-content></ng-content>
    </div>
  `
})
export class CardBodyComponent {
  /** Remove default padding */
  noPadding = input<boolean>(false);
}
