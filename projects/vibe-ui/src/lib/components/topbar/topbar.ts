import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'vb-topbar',
  imports: [CommonModule],
  templateUrl: './topbar.html',
  styleUrl: './topbar.scss'
})
export class TopbarComponent {
  title = input<string>('Dashboard Overview');
}
