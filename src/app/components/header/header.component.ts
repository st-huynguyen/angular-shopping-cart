import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Cart as CartItem } from '../../core/model/cart.model';
import { AppState } from '../../store/app-state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  cartItems!: CartItem[];
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.pipe(select('cart')).subscribe(
      cart => {
        this.cartItems = cart.cartList
      }
    );
  }
}
