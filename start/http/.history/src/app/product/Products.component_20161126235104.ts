import {ComponentStillLoadingError} from '@angular/core/src/linker/compiler';
import { Component } from '@angular/core';
import { Http,Response } from '@angular/http';

@Component({
   selector:'product-list',
   template:`
     <div>
        <h2>Basic Request</h2>

     </div>
   `
})

export class ProductComponent{

     data:Object;
     loading:boolean;
     constructor(private http:Http){

     }

    //  getProducts():void{
    //    this.loading=true;
    //    this.http.request('http://jsonplaceholder.typicode.com/posts/1')
    //    .subscribe((res:Response)=>{
    //       this.data=res.json();
    //       this.loading=false;
    //    })
    //  }
}

