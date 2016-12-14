
import { Component, EventEmitter} from '@angular/core';
import { Product } from '../product/product.model';


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

    isSelected(product:Product):any{
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
