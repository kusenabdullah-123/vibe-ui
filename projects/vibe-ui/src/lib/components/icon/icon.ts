import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'vb-icon',
  imports: [CommonModule],
  templateUrl: './icon.html',
  styleUrl: './icon.scss'
})
export class IconComponent {
  /**
   * Icon name - bisa digunakan untuk emoji atau text fallback
   * Jika tidak ada content projection, ini akan di-render
   */
  name = input<string>('');
  
  /**
   * Size preset: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
   */
  size = input<'xs' | 'sm' | 'md' | 'lg' | 'xl'>('md');
  
  /**
   * Custom size dalam pixels (override size preset)
   */
  customSize = input<number | undefined>(undefined);
  
  /**
   * Color - bisa gunakan CSS variable atau hex/rgb
   */
  color = input<string | undefined>(undefined);
  
  getSizeClass(): string {
    return `vb-icon--${this.size()}`;
  }
  
  getStyles(): any {
    const styles: any = {};
    
    if (this.customSize()) {
      styles['width'] = `${this.customSize()}px`;
      styles['height'] = `${this.customSize()}px`;
    }
    
    if (this.color()) {
      styles['color'] = this.color();
    }
    
    return styles;
  }
}
