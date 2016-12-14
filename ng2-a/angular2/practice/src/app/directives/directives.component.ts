import { Component, OnInit } from '@angular/core';
import {HighlightDirective} from '../highlight.directive';
import { UnlessDirective } from './custom-structural-directive.directive';
@Component({
  moduleId: module.id,
  selector: 'app-directives',
  templateUrl: 'directives.component.html',
  styleUrls: ['directives.component.css'],
  directives:[HighlightDirective,UnlessDirective]
})
export class DirectivesComponent implements OnInit {

  constructor() { 
  }

  ngOnInit() {
  }

  private items=[1,2,3,4,5,6,7,8];

  private switch=true;
  private switchCondition=10;
onSwitch(){
    this.switch=!this.switch;
  }

}
