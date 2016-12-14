import { Directive,TemplateRef,ViewContainerRef,Input} from '@angular/core';

@Directive({
  selector: '[unless]'
})
export class UnlessDirective {
 
  //when ever this attribuet is set do this
  @Input() set unless(condition:boolean){
    console.log('changed',condition)
      if(!condition){
        this.vcRef.createEmbeddedView(this.templateRef);
      }else{
        this.vcRef.clear()
      }
  }

  constructor(private templateRef:TemplateRef<any>,private vcRef:ViewContainerRef) {

   }

}
