import {AbstractControl, FormControl, Validators} from '@angular/forms';


export function skuValidator(control:FormControl):a<string, boolean>{
   if(!control.value.match(/^123/)){
     return {invalidSku: true};
   }
}


// export function skuValidator(control:FormControl): { [d: string]: boolean}{
//    if(!control.value.match(/^123/)){
//      return {invalidSku: true};
//    }
// }



