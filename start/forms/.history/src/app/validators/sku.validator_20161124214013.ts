import {XHRBackend} from '@angular/http';
import {FormControl, Validators} from '@angular/forms';


export function skuValidator(control:FormControl): {string: boolean}{
   if(!control.value.match(/^123/)){
     return {invalidSku: true};
   }
}
