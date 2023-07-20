import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  color: string = 'red';

  constructor(private element: ElementRef) { 
    console.log(this.element.nativeElement);
  }

}
