import {Component,EventEmitter,Output} from '@angular/core';

@Component({
    moduleId:module.id,
    selector:'fa-event-binding',
    template:`<button (click)="onClick($event)">click me!</button>
    `
})
export class EventBindingComponent{
   
   //
   @Output() clicked = new EventEmitter<string>();

    onClick(){
        this.clicked.emit('custom event works!'); 
    }

}