import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector:'app-product',
  template:`
      <h1>{{id}}</h1>
  `
})
export class ProductComponent{

    private id:string;

    constructor(private route:ActivatedRoute){
          /**
           * Notice that route.params is an observable.
           *  We can extract the value of the param into
           * a hard value by using .subscribe. In this case, we assign
           * the value of params['id'] to the id instance
           *  variable on the component.
           */
         route.params.subscribe(params=>{
            this.id=params['id'];
         })

         console.log(this.id);

    }

}
