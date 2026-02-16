import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'vb-sidebar-header',
  imports: [CommonModule],
  templateUrl: './sidebar-header.html',
  styleUrl: './sidebar-header.scss'
})
export class SidebarHeaderComponent {
  brand = input<string>('Vibe UI');
  showToggle = input<boolean>(true);
  
  toggle = output<void>();
  
  onToggle() {
    this.toggle.emit();
  }
}
