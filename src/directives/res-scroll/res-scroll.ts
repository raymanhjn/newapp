import { Directive, Input, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[res-scroll]',
  host: {
    '(ionScroll)': 'onContentScroll($event)'
  }
})
export class ResScrollDirective {
  @Input("submenu") submenu:HTMLElement;
  @Input("order") order:HTMLElement;

  constructor( public element:ElementRef, public renderer:Renderer ) {
    console.log('Hello ResScrollDirective Directive');
  }
  onContentScroll(event) {
      if(event.scrollTop > 430 ){
        this.renderer.setElementClass(this.submenu, "fixed",true);
        this.renderer.setElementClass(this.order, "fixed",true);
      }else {
        this.renderer.setElementClass(this.submenu, "fixed", false);
        this.renderer.setElementClass(this.order, "fixed", false);
      }

  }
}
