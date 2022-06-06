import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
  ],
  declarations: [
    ProductsComponent,
    ProductDetailComponent,
  ],
})
export class ProductListModule {}
