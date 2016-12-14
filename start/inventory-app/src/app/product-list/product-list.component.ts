import {Console} from '@angular/compiler/src/private_import_core';
import {Console} from '@angular/compiler-cli/src/private_import_core';
import {EventEmitter} from '@angular/common/src/facade/async';

import { Component, EventEmitter} from '@angular/core';
import { Product } from '../product/product.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Product } from './../product/product.model';

@Component({
    selector: 'product-list',
    inputs: ['productList'],
    outputs: ['onProductSelected'],
    template:`
       <div class="ui items">
          <product
          *ngFor="let product of productList"
          [product]="product"
          (click)="clicked(product)"
          [class.selected]="isSelected(product)"
          >  
          </product>
       </div>
    `
})

export class ProductList{
    productList:Array<Product>;
    selectedProduct:Product;

    onProductSelected:EventEmitter<Product>;

    constructor(){
        this.onProductSelected=new EventEmitter<Product>();
    }

    isSelected(product:Product):booloean{
        if(!product || !this.selectedProduct){
            return false;
        }
        return product.sku===this.selectedProduct.sku; 
    }

    clicked(product:Product):void{
       this.selectedProduct=product;
       this.emit(product);
    }
    emit(product){
   
       this.onProductSelected.emit(product);
    }
}