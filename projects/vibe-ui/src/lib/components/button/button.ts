import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'outline' | 'ghost' | 'link' | 'normal';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'icon';
export type ButtonType = 'button' | 'submit' | 'reset';

@Component({
  selector: 'vb-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.scss'
})
export class ButtonComponent {
  /** Button style variant */
  variant = input<ButtonVariant>('normal');
  
  /** Button size */
  size = input<ButtonSize>('md');
  
  /** HTML button type attribute */
  type = input<ButtonType>('button');
  
  /** Disabled state */
  disabled = input<boolean>(false);
  
  /** Loading state */
  loading = input<boolean>(false);
  
  /** Full width button */
  fullWidth = input<boolean>(false);
  
  /** Click event emitter (optional, native click works on component host) */
  onClick = output<MouseEvent>();

  /** Helper to get dynamic classes */
  get buttonClasses(): string {
    const classes = ['vb-button'];
    
    // Variant
    if (this.variant()) classes.push(`vb-button--${this.variant()}`);
    
    // Size
    if (this.size()) classes.push(`vb-button--${this.size()}`);
    
    // State
    if (this.loading()) classes.push('vb-button--loading');
    if (this.fullWidth()) classes.push('vb-button--full');

    return classes.join(' ');
  }

  handleClick(event: MouseEvent) {
    if (!this.disabled() && !this.loading()) {
      this.onClick.emit(event);
    }
  }
}
