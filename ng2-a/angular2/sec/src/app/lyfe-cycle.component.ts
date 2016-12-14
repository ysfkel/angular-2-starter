import { Component,
  OnChanges,
   OnInit,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input,
  ViewChild, //used to make local view variables accesible in the class
  ContentChild
} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-lyfe-cycle',
  templateUrl: 'lyfe-cycle.component.html',
})
export class LyfeCycleComponent implements OnChanges,OnInit,DoCheck,AfterContentInit,
AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {

  constructor() { }
  
  //makes this property bindable externally
  @Input() bindable=1000;
  
  @ViewChild('boundParagrahviewAndClass')
  boundParagrahviewAndClass:HTMLElement;

  @ContentChild('boundContent') //bound content is passed in view content 
  boundContent:HTMLElement;
   
  //executed when ever a bound property changes e.g bindable above
  ngOnChanges(){
     this.log('ngChanges')
  }
  ngOnInit() {
       this.log('onInit')
  }
  ngDoCheck(){
       this.log('doCheck')
  }
  ngAfterContentInit(){
      this.log('afterContentInit')
  }
  ngAfterContentChecked(){
      this.log('aftercontentChecked')
      this.logAny(this.boundParagrahviewAndClass); //this is undefined here because the view has not been setup yet
      this.logAny(this.boundContent);
  }
  ngAfterViewChecked(){
       this.log('afterViewChecked');
       this.logAny(this.boundParagrahviewAndClass);
  }
    ngAfterViewInit(){
        this.log('afterViewInit');
        this.logAny(this.boundParagrahviewAndClass);
  }

  ngOnDestroy(){
        this.log('onDestroy')
  }

  log(val:string){
      console.log(val);
  }

  logAny(value){
    console.log(value);
  }
   
}
