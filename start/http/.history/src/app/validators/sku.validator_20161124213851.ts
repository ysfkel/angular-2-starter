import {FormControl, Validators} from '@angular/forms';


export function skuValidator(control:FormControl): { [s: boolean}{
   if(!control.value.match(/^123/)){
     return {invalidSku: true};
   }
}
