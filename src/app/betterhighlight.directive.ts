import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterhighlight]'
})
export class BetterhighlightDirective {

  
  constructor(private element : ElementRef , renderer : Renderer2 ) { 

  }

  @HostBinding('style.backgroundColor') background : string = 'yellow';

  @HostListener('mouseenter') mouseenter(){
    this.background = 'pink';
  }

  @HostListener('mouseleave') mouseLeave(){
    this.background = 'transparent';
  }


}
