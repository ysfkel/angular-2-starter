
import { Component } from '@angular/core';

@Component({
    selector:'product-price',
    inputs:['price'],
    template:`
      <div class="price-display">\${{ price }}</div>
     `
})

export class ProductPrice{
    price:number;
}