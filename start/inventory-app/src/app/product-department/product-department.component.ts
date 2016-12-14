import { Component } from '@angular/core';

@Component({
     selector: 'product-department',
     inputs: ['departments'],
     template:`
        <div class="product-department">
           <span *ngFor="let name of departments;let i=index">
                 <a href="#">{{ name }}</a>
               <span>{{i < (departments.length-1) ? '>' : '' }}</span>
           </span>
        </div> 
        `
})
export class ProductDepartment{
    departments: Array<string>;
    
}