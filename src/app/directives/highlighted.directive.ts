import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlighted]'
})
export class HighlightedDirective {

  constructor( private el:ElementRef ) {
    console.log("Directive called ");
    // el.nativeElement.style.backgroundColor = "blue";
    
   }

   @Input("appHighlighted") newColor:string;

   @HostListener('mouseenter') mouseIn(){
    this.highlight( this.newColor || 'blue' );
   }

   @HostListener('mouseleave') mouseOut(){
    this.highlight( null );
   }

   private highlight( color:string ) {
    this.el.nativeElement.style.backgroundColor = color;
   }

}
