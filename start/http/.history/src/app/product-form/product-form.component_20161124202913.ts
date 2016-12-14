import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Component } from '@angular/core';

@Component({
    selector:'product-form',
    templateUrl:'./product-form.component.html'
})

export class ProductFormComponent{

    sku:string;
    myForm:FormGroup;
    skuAbs:AbstractControl;
    nameAbs:AbstractControl;

    constructor(fb:FormBuilder){
       this.sku="TTTAAA";
       this.myForm=fb.group({
           sku:['my sku',Validators.required],
           name:['lumia',Validators.required]
       });

      this.skuAbs=this.myForm.controls['sku'];

    }

    onSubmit(value){
        console.log(value);
    }

}
