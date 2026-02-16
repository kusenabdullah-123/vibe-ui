import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'vb-profile-item',
  imports: [CommonModule],
  templateUrl: './profile-item.html',
  styleUrl: './profile-item.scss'
})
export class ProfileItemComponent {
  icon = input<string>('');
  href = input<string>('#');
  danger = input<boolean>(false);
  divider = input<boolean>(false);
}
