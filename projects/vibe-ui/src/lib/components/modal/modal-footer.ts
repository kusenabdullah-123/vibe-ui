import { Component } from '@angular/core';

@Component({
  selector: 'vb-modal-footer',
  standalone: true,
  template: `<div class="vb-modal__footer"><ng-content></ng-content></div>`,
  styleUrl: '../../styles/components/_modal.scss'
})
export class ModalFooterComponent {}
