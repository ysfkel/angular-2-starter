import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Component } from '@angular/core';
import { skuValidator } from '../validators/sku.validator';
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

      console.log('skuValidator',skuValidator)

       this.sku="TTTAAA";

       this.myForm=fb.group({
           sku:['my sku',Validators.compose([
             Validators.required,
             skuValidator
           ])],

           productCategry:['',Validators.required],

           name:['lumia',Validators.required]
       });

      this.skuAbs=this.myForm.controls['sku'];
      this.nameAbs=this.myForm.controls['name'];
      //watching for changes on the sku
      this.skuAbs.valueChanges.subscribe((value:string)=>{
        console.log('form control change:',value)
      });

      //watching for changes on myForm
      this.myForm.valueChanges.subscribe((form:any)=>{
        console.log('form change',form);
      })

    }

    onSubmit(value){
        console.log(value);
    }

}
