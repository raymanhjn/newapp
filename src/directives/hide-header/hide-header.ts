import { Directive, Input, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[hide-header]', // Attribute selector
  host: {
    '(ionScroll)': 'onContentScroll($event)'
  }
})
export class HideHeaderDirective {
  @Input("head") header:HTMLElement;
  @Input("submenu") submenu:HTMLElement;
  headerHeight;
  scrollContent;

  constructor( public element:ElementRef, public renderer:Renderer) {
    console.log("directive");
  }

  ngOnInit() {
    console.log("directive");
    this.headerHeight = this.header.clientHeight;
    this.renderer.setElementStyle(this.header, 'webkitTransition', 'top 700ms');
    this.scrollContent = this.element.nativeElement.getElementsByClassName("scroll-content")[0];
    this.renderer.setElementStyle(this.scrollContent, 'webkitTransition', 'margin-top 700ms');
  }

  onContentScroll(event) {
    if(event.scrollTop > 0 ){
      this.renderer.setElementStyle(this.header, "top", "-60px");
      // this.renderer.setElementStyle(this.header, "background", "transparent");
      this.renderer.setElementStyle(this.scrollContent,"margin-top","0px");
    } else {
      this.renderer.setElementStyle(this.header, "top", "0px");
      // this.renderer.setElementStyle(this.header, "background", "#f8f8f8");
      this.renderer.setElementStyle(this.scrollContent,"margin-top","60px");
    }

  }

}
