import {skipUntil} from 'rxjs/operator/skipUntil';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector:'product-form',
    template:`
       <div class="ui raised segment">
          <form #f="ngForm" (ngSubmit)="onSubmit(f.value)" class="ui form">
              <div class="field">
                   <label>
                      SKU
                   </label>

                   <input type="text"
                    placeholder="sku"
                    name="sku"
                    ngModel="{{sku}}"
                    />
              </div>
             <button type="submit" class="ui button">save</button>
          </form>

          <form [formGroup]="myForm">

          </form>
       </div>

    `
})

export class ProductFormComponent{

    sku:string;
    myForm:FormGroup;

    constructor(fb:FormBuilder){
       // this.sku="TTTAAA";
       this.myForm=fb.group({
           sku:['my sku']
       });
       //this.myControl=fb.control()

       console.log('   this.myForm',this.myForm)
    }

    onSubmit(value){
        console.log(value);
    }

}
