import { Component, OnInit , Input} from '@angular/core';
import { Product } from './product.model';

@Component({
    selector:'product',
    inputs:['product'],
      host: {
        'class':'item'
    },
    template:`
        <product-image [imageUrl]="product.imageUrl"></product-image>
          <div class="content">
            <div class="header">{{ product.name }}</div>
            <div class="meta">
              <div class="product-sku">SKU #{{ product.sku }}</div>
            </div>
            <div class="description">
              <product-department [departments]="product.department"></product-department>
            </div>
          </div>
          <product-price [price]="product.price"></product-price>
       `
})

export class ProductComponent  {
    product:Product;
}