import { Component, input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'vb-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="vb-modal" [style.max-width]="width()" [class]="customClass()">
      <ng-content></ng-content>
    </div>
  `,
  styleUrl: './modal.scss',
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent {
  /** Max width of the modal container */
  width = input<string>('100%');
  
  /** Additional custom classes */
  customClass = input<string>('');
}
