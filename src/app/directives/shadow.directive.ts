import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appShadow]'
})
export class ShadowDirective implements OnInit {
  @Input() boxShadow = '2px 2px 12px blue';

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2) {
    // this.renderer.setStyle(elementRef.nativeElement, 'box-shadow', '2px 2px 12px blue');
  }

  ngOnInit() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'box-shadow', this.boxShadow);
  }

}
