import { HighlightDirective } from './highlight.directive';
import { ElementRef } from '@angular/core';

describe('HighlightDirective', () => {
  let directive: HighlightDirective;
  let elementRef: ElementRef;

  beforeEach(() => {
    elementRef = new ElementRef(document.createElement('div'));
    directive = new HighlightDirective();
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should change color to #3498db on mouse enter', () => {
    directive.onMouseEnter();
    expect(directive.color).toBe('#3498db');
  });

  it('should reset color on mouse leave', () => {
    directive.onMouseLeave();
    expect(directive.color).toBe('');
  });
});
