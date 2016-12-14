import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({

   selector:'product-list',

   template:`
     <div>

     </div>

   `

})

export class ProductComponent{

     data:Object;
     loading:boolean;
     constructor(private http:Http){

     }

}
