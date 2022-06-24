import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Cart as CartItem } from '../../core/model/cart.model';
import { AppState } from '../../store/app-state';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems!: CartItem[];
  totalPrice!: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.pipe(select('cart')).subscribe(
      cart => {
        this.cartItems = cart.cartList
        this.totalPrice = cart.totalPrice
      }
    );
  }
}
