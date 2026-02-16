import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'vb-app',
  imports: [CommonModule],
  templateUrl: './vibe-app.html',
  styleUrl: './vibe-app.scss'
})
export class VibeAppComponent {
  collapsed = input<boolean>(false);
}
