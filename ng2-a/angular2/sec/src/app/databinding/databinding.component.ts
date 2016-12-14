import { Component, OnInit } from '@angular/core';
import { EventBindingComponent } from './event-binding.component';
import { EventRenameBindingComponent } from './event-rename-binding.component';
import { TwowayBindingComponent } from './twoway-binding.component';
@Component({
  moduleId: module.id,
  selector: 'app-databinding',
  templateUrl: 'databinding.component.html',
  styleUrls: ['databinding.component.css'],
  directives:[EventBindingComponent,EventRenameBindingComponent,TwowayBindingComponent]
})
export class DatabindingComponent {

  name="yusuf";
  text="hello world!";

  onClick(mytext:string){
    alert(mytext)
  }
  
}
