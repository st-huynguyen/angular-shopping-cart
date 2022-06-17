import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';

@NgModule({
  imports: [CommonModule, CartRoutingModule, MatIconModule],
  declarations: [CartComponent, CartItemComponent],
})
export class CartModule {}
