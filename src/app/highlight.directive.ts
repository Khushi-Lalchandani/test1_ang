import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightDirective]',
})
export class HighlightDirective {
  constructor(private element: ElementRef) {}

  @HostListener('mouseenter') hoverOver() {
    this.element.nativeElement.style.backgroundColor = 'rgba(80,80,200,.4)';
    this.element.nativeElement.style.color = '#fff';
  }
  @HostListener('mouseleave') mouseLeave() {
    this.element.nativeElement.style.backgroundColor = 'transparent';
    this.element.nativeElement.style.color = '#000';
  }
}
