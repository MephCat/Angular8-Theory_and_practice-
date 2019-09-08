import {Directive, ElementRef, HostListener, Renderer2, Input, HostBinding} from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  @Input('appStyle') color = 'blue';
  @Input('fontWeight') fontW = 'normal';
  @Input('dStyles') styleShadow: {boxShadow: string};

  @HostBinding('style.color') elColor = null;

  constructor(private elRef: ElementRef, private rend: Renderer2) {
    console.log(rend);
  }

  @HostListener('click', ['$event.target']) onClick(event: Event) {
    this.elColor = 'green';
  }

  @HostListener('mouseenter', ['$event.target']) onEnter(event: Event) {
    console.log(event);
    this.rend.setStyle(this.elRef.nativeElement, 'color', this.color);
    this.rend.setStyle(this.elRef.nativeElement, 'fontWeight', this.fontW);
    this.rend.setStyle(this.elRef.nativeElement, 'boxShadow', this.styleShadow.boxShadow);

  }
  @HostListener('mouseleave', ['$event.target']) onLeavve(event: Event) {
    console.log(event);
    this.rend.setStyle(this.elRef.nativeElement, 'color', null);
    this.rend.setStyle(this.elRef.nativeElement, 'fontWeight', null);
    this.rend.setStyle(this.elRef.nativeElement, 'boxShadow', null);
  }


}
