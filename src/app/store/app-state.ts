import { Cart } from '../core/model/cart.model';

export interface AppState {
  readonly cart: {
    cartList: Cart[],
    totalPrice: number,
    totalItems: number,
  };
}
