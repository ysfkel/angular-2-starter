import {Console} from '@angular/core/src/console';

import { Component } from '@angular/core';
import { Product } from './product/product.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

 products: Array<Product>;

 myvar:string;
 color:string;
 font:string;

 constructor(){
   this.myvar="A";

   this.products = [
           new Product('1', 'lumia','../app/resources/images/products/black-hat.jpg',['computers'],123),
           new Product('2', 'surface','../app/resources/images/products/black-shoes.jpg',['computers','tablets'],123),
           new Product('3', 'lumia','../app/resources/images/products/blue-jacket.jpg',['computers'],123)
    ];  
 }

 apply(coloprop:HTMLInputElement,fontprop:HTMLInputElement){
   this.color=coloprop.value;
    this.font=fontprop.value;
   
 }

  handleSelectedProduct(product:Product){
     console.log('selected product',product)
  }

}
