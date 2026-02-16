import {
  Component,
  ContentChild,
  AfterContentInit,
  HostBinding,
  OnDestroy,
  effect,
  inject,
  Injector,
  runInInjectionContext
} from '@angular/core';
import { VbInputDirective } from './vb-input.directive';
import { Subject } from 'rxjs';

@Component({
  selector: 'vb-form-field',
  standalone: true,
  templateUrl: './form-field.html',
  styleUrl: './form-field.scss'
})
export class FormFieldComponent implements AfterContentInit, OnDestroy {

  @ContentChild(VbInputDirective) input?: VbInputDirective;
  @HostBinding('class.has-content') hasContent = false;

  private unsub = new Subject<void>();
  private injector = inject(Injector);

  ngAfterContentInit() {
    if (this.input) {
      runInInjectionContext(this.injector, () => {
        effect(() => {
          const value = this.input!.valueChanges();
          this.hasContent = !!value && value.toString().length > 0;
        });
      });
    }
  }

  ngOnDestroy() {
    this.unsub.next();
    this.unsub.complete();
  }
}
