import { Component } from '@angular/core';

@Component({
  selector: 'vb-card-footer',
  standalone: true,
  template: `
    <div class="vb-card__footer">
      <ng-content></ng-content>
    </div>
  `
})
export class CardFooterComponent {}
