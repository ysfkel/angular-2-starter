import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-twoway-binding',
  template:`
     <input [(ngModel)]="person.name"/>
         <input [(ngModel)]="person.name"/>
  `
})
export class TwowayBindingComponent {

  person={
    name:'Yusuf Kel'
  }

}
