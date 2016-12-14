import {ComponentStillLoadingError} from '@angular/core/src/linker/compiler';
import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({

   selector:'product-list',

   template:`
     <div>
        <h2>Basic Request</h2>
        <button type="button" (click)="getProducts()">GET</button>
          <div *ngIf="loading">Loading..</div>
          <pre>{{data:json}}</pre>
     </div>

   `

})

// template: `
  <h2>Basic Request</h2>
  <button type="button" (click)="makeRequest()">Make Request</button>
  <div *ngIf="loading">loading...</div>
  <pre>{{data | json}}</pre>
`
}

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

