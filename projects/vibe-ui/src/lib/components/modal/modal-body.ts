import { Component } from '@angular/core';

@Component({
  selector: 'vb-modal-body',
  standalone: true,
  template: `<div class="vb-modal__body"><ng-content></ng-content></div>`,
  styleUrl: './modal.scss'
})
export class ModalBodyComponent {}
