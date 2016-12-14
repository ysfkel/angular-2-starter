import {Component,EventEmitter,Output} from '@angular/core';

@Component({
    moduleId:module.id,
    selector:'renamed-event-binding',
    template:`<button (click)="onClick($event)">click me!</button>
    `
})
export class EventRenameBindingComponent{
   
   //
   @Output('clickable') me = new EventEmitter<string>();

    onClick(){
        this.me.emit('renamed custom event works!'); 
    }

}