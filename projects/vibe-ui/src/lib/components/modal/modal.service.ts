import { Injectable, TemplateRef } from '@angular/core';
import { Dialog, DialogConfig, DialogRef } from '@angular/cdk/dialog';
import { ComponentType } from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root'
})
export class VbModalService {

  constructor(private dialog: Dialog) { }

  /**
   * Opens a modal dialog containing the given component.
   * @param componentOrTemplateRef The component or template to show within the dialog.
   * @param config Configuration options for the dialog.
   * @returns Reference to the newly-opened dialog.
   */
  open<T, D = any, R = any>(
    componentOrTemplateRef: ComponentType<T> | TemplateRef<T>, 
    config?: DialogConfig<D, DialogRef<R, T>>
  ): DialogRef<R, T> {
    
    return this.dialog.open(componentOrTemplateRef, {
      // Default configurations
      backdropClass: ['cdk-overlay-backdrop', 'cdk-overlay-dark-backdrop'],
      panelClass: 'vb-modal-panel',
      autoFocus: 'first-tabbable', // standard a11y focus trap
      ...config
    });
  }
}
