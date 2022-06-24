import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Cart as CartItem } from 'src/app/core/model/cart.model';
import { addItemToCart, deleteItemToCart } from 'src/app/store/actions/cart.actions';
import { AppState } from 'src/app/store/app-state';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem!: CartItem;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {

  }

  onAddItem = () => {
    this.store.dispatch(addItemToCart({ cartItem: this.cartItem }));
  }
  
  onRemoveItem = () => {
    this.store.dispatch(deleteItemToCart({ cartItem: this.cartItem }));
  }

}
