import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appTooltip]',
})
export class TooltipPositionDirective implements OnInit {
  @Input() tooltipPosition!: string;
  @Input() toolTipColor!: string;
  @Input() toolTipSize!: number;
  @Input() tooltipText!: string;
  tooltip!: HTMLElement;
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {
    this.tooltip = this.renderer.createElement('div');
    const text = this.renderer.createText(this.tooltipText);
    this.renderer.appendChild(this.tooltip, text);
    this.renderer.appendChild(this.elementRef.nativeElement, this.tooltip);
    this.renderer.setStyle(this.tooltip, 'position', 'relative');
    this.renderer.setStyle(this.tooltip, 'visibility', 'hidden');
  }
  @HostListener('mouseenter') hover() {
    this.showTooltip();
  }
  @HostListener('mouseleave') onLeave() {
    this.hideTooltip();
  }
  private showTooltip() {
    this.renderer.setStyle(this.tooltip, 'visibility', 'visible');
    this.renderer.setStyle(
      this.tooltip,
      'color',
      this.toolTipColor === '' ? '#000' : this.toolTipColor
    );
    this.renderer.setStyle(
      this.tooltip,
      'font-size',
      this.toolTipSize === 0 ? `${14}px` : `${this.toolTipSize}px`
    );

    switch (this.tooltipPosition) {
      case 'top':
        this.renderer.setStyle(
          this.tooltip,
          'transform',
          `translateY(-${
            this.tooltip.clientHeight + this.tooltip.clientWidth / 6
          }px)`
        );
        break;
      case 'right':
        this.renderer.setStyle(
          this.tooltip,
          'transform',
          `translate(${this.tooltip.clientWidth}px,-${this.tooltip.clientHeight}px)`
        );
        break;
      case 'bottom':
        this.renderer.setStyle(this.tooltip, 'transform', 'translateY(5px)');
        break;
      case 'left':
        this.renderer.setStyle(
          this.tooltip,
          'transform',
          `translate(-${this.tooltip.clientWidth}px,-${this.tooltip.clientHeight}px)`
        );
        break;
      default:
        this.renderer.setStyle(
          this.tooltip,
          'transform',
          `translateY(-${
            this.tooltip.clientHeight + this.tooltip.clientWidth / 6
          }px)`
        );
    }
  }
  private hideTooltip() {
    this.renderer.setStyle(this.tooltip, 'visibility', 'hidden');
  }
}
