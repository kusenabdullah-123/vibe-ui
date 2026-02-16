import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'vb-layout',
  imports: [CommonModule, RouterModule],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class LayoutComponent {
  isCollapsed = false;
  isProfileDropdownOpen = false;

  adminName = 'Admin User';
  adminAvatar = 'https://ui-avatars.com/api/?name=Admin+User&background=3b82f6&color=fff';

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  toggleProfileDropdown() {
    this.isProfileDropdownOpen = !this.isProfileDropdownOpen;
  }
}
