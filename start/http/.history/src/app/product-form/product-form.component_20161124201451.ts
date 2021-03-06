import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup,AbstractControl,Validators } from '@angular/forms';

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
       </div>

          <div class="ui raised segment">

          {{skuAbs.valid}}

          <form [formGroup]="myForm" (ngSubmit)="onSubmit(myForm.value)" class="ui form">
             <div class="field">
                  <label>sku</label>

                  <input type="text" placeholder="sku" [formControl]="myForm.controls['sku']" >

                          <button type="submit" class="ui button">save</button>
             </div>
          </form>
          </div>

    `
})

export class ProductFormComponent{

    sku:string;
    myForm:FormGroup;
    skuAbs:AbstractControl;

    constructor(fb:FormBuilder){
       this.sku="TTTAAA";
       this.myForm=fb.group({
           sku:['my sku',Validators.required]
       });

      this.skuAbs=this.myForm.controls['sku'];

    }

    onSubmit(value){
        console.log(value);
    }

}
