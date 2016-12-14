
import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
    selector:'product-image',
    inputs:['imageUrl'],
    template:`
    <img class="product-image" [src]="imageUrl" alt="image"> `
})

export class ProductImage{
    imageUrl:string
}