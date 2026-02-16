import { Component, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'vb-profile',
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrl: './profile.scss'
})
export class ProfileComponent {
  name = input<string>('User');
  avatar = input<string>('');
  
  isOpen = signal(false);
  
  toggle() {
    this.isOpen.update(value => !value);
  }
  
  getAvatarUrl() {
    if (this.avatar()) {
      return this.avatar();
    }
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(this.name())}&background=3b82f6&color=fff`;
  }
}
