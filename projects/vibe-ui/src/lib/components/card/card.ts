import { Component, input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'vb-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="vb-card" [style.max-width]="maxWidth()">
      <ng-content></ng-content>
    </div>
  `,
  styleUrl: './card.scss', // Shared styles
  encapsulation: ViewEncapsulation.None
})
export class CardComponent {
  /** Max width of the card */
  maxWidth = input<string>('100%');
}
