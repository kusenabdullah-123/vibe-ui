import { Component, input, Optional } from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button';
import { IconComponent } from '../icon/icon';
import { LucideAngularModule, X } from 'lucide-angular';

@Component({
  selector: 'vb-modal-header',
  standalone: true,
  imports: [CommonModule, ButtonComponent, IconComponent, LucideAngularModule],
  templateUrl: './modal-header.html',
  styleUrl: './modal.scss'
})
export class ModalHeaderComponent {
  /** Modal title to display */
  title = input<string>('');
  
  /** Show close button */
  showClose = input<boolean>(true);
  
  readonly X = X;

  constructor(@Optional() private dialogRef: DialogRef<any>) {}
  
  close() {
    this.dialogRef?.close();
  }
}
