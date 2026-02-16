import { Component, computed, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'vb-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar.html',
  styleUrl: './avatar.scss'
})
export class AvatarComponent {
  /** Image source URL */
  src = input<string | null>(null);
  
  /** Name for initials fallback */
  name = input<string>('');
  
  /** Size: sm, md, lg, xl */
  size = input<'sm' | 'md' | 'lg' | 'xl'>('md');
  
  /** Shape: circle, square, rounded */
  shape = input<'circle' | 'square' | 'rounded'>('circle');

  /** Initials computed from name */
  initials = computed(() => {
    const n = this.name();
    if (!n) return '';
    const parts = n.split(' ');
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
    return (parts[0][0] + parts[1][0]).toUpperCase();
  });

  /** Randomized background color for initials based on name hash (simple) */
  bgColor = computed(() => {
    if (this.src()) return { bg: 'transparent', text: 'transparent' }; // Consistent return type
    // Implement simple hash for color consistency
    const colors = ['#e0e7ff', '#fef3c7', '#dcfce7', '#fce7f3', '#f3f4f6'];
    const textColors = ['#4f46e5', '#d97706', '#16a34a', '#db2777', '#374151'];
    
    let hash = 0;
    const str = this.name() || 'A';
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash) % colors.length;
    return { bg: colors[index], text: textColors[index] };
  });
}
