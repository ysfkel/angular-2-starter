import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector:'app-product',
  template:`

  `
})
export class ProductComponent{

    private id:string;

    constructor(private route:ActivatedRoute){

         route.params.subscribe(params=>{
            this.id=params['id'];
         })

         console.log(this.id);

    }

}
