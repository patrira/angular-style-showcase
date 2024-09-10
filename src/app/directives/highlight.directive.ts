import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostBinding('style.color') color!: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.color = '#3498db';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.color = '';
  }
}
