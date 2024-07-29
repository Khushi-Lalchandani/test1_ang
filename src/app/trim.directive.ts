import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTrim]',
})
export class TrimDirective {
  trim!: string;
  constructor(private elementRef: ElementRef) {}
  @HostListener('blur') onBlur() {
    this.trim = this.elementRef.nativeElement.value.trim();
    this.elementRef.nativeElement.value = this.trim;
  }
}
