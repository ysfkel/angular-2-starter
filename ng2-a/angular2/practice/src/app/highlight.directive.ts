import { Directive, ElementRef, Renderer, HostListener, HostBinding,Input} from '@angular/core';
@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') mouseover() {
    this.backgroundColor = this.highlightColor;
  };

  @HostListener('mouseleave') mouseleave(){
    this.backgroundColor=this.defaultColor;
  } 

  //bind the color to the background color property on the host element
  @HostBinding('style.backgroundColor') get setsColor() {
      return this.backgroundColor;
  }

  @Input() defaultColor;//='yellow';

  //using the directive name to rename the property ensures we can use 
  //property binding to set color on the directive itself
  @Input('highlight') highlightColor;//='green';

 // private backgroundColor = this.defaultColor;
 private backgroundColor:string;

 ngOnInit(){
   this.backgroundColor=this.defaultColor;
 }

  constructor(private elementRef: ElementRef, private renderer: Renderer) {
    // elementRef.nativeElement.style.backgroundColor='red';
   // renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', this.backgroundColor);
  }

}
