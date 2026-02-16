import { Component } from '@angular/core';

@Component({
  selector: 'vb-card-header',
  standalone: true,
  template: `
    <div class="vb-card__header">
      <ng-content></ng-content>
    </div>
  `
})
export class CardHeaderComponent {}
