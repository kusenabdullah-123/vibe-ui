import {
  Directive,
  HostListener,
  OnInit,
  OnDestroy,
  inject,
  signal,
  input as inputSignal
} from '@angular/core';
import { ElementRef } from '@angular/core';
import { ControlContainer, NgModel } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[vbInput]',
  exportAs: 'vbInput',
  standalone: true
})
export class VbInputDirective implements OnInit, OnDestroy {
  
  private readonly elementRef = inject(ElementRef);
  private readonly controlContainer = inject(ControlContainer, { optional: true, host: true, skipSelf: true });
  private readonly ngModel = inject(NgModel, { optional: true, self: true });
  
  readonly valueChanges = signal<string>('');
  
  readonly formControlName = inputSignal<string | undefined>(undefined);
  
  private unsub = new Subject<void>();
  
  @HostListener('input', ['$event'])
  whenInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.valueChanges.set(value);
  }
  
  @HostListener('change', ['$event'])
  whenChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.valueChanges.set(value);
  }
  
  ngOnInit() {
    const name = this.formControlName();
    
    // FormControl dari FormGroup
    if (this.controlContainer && name) {
      const control = this.controlContainer.control?.get(name);
      control?.valueChanges.pipe(takeUntil(this.unsub)).subscribe(value => {
        this.valueChanges.set(value as string || '');
      });
      this.valueChanges.set((control?.value as string) || '');
      return;
    }
    
    // NgModel
    if (this.ngModel) {
      this.ngModel.valueChanges?.pipe(takeUntil(this.unsub)).subscribe(value => {
        this.valueChanges.set(value as string || '');
      });
      this.valueChanges.set(this.ngModel.value || '');
      return;
    }
    
    // Fallback: native element value
    const nativeValue = (this.elementRef.nativeElement as HTMLInputElement).value;
    this.valueChanges.set(nativeValue || '');
  }
  
  ngOnDestroy() {
    this.unsub.next();
    this.unsub.complete();
  }
}
