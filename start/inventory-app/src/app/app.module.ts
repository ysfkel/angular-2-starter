import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductImage } from './product/product-image.component';
import { ProductList } from './product-list/product-list.component';
import { ProductPrice } from './product/product-price.component';
import { ProductDepartment } from './product-department/product-department.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductImage,
    ProductList,
    ProductPrice,
    ProductDepartment
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
