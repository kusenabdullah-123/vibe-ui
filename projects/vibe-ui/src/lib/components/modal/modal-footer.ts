import { Component } from '@angular/core';

@Component({
  selector: 'vb-modal-footer',
  standalone: true,
  template: `<div class="vb-modal__footer"><ng-content></ng-content></div>`,
  styleUrl: './modal.scss'
})
export class ModalFooterComponent {}
