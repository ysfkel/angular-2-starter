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

     getProducts:function():void{
       this.loading=true;
       this.Http.request('http://jsonplaceholder.typicode.com/posts/1')
       .subscribe((res:Response)=>{
          this.data=res.json();
          this.loading=false;
       })
     }

}
