import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'vb-nav-item',
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-item.html',
  styleUrl: './nav-item.scss'
})
export class NavItemComponent {
  icon = input<string>('');
  link = input<string>('');
  label = input<string>('');
}
