import { createReducer, on } from '@ngrx/store';
import { addItemToCart, deleteItemToCart } from '../actions/cart.actions';
import { Cart as CartItem } from '../../core/model/cart.model';

const initialState: CartItem[] = [];

export const cartReducer = createReducer(
  initialState,
  on(addItemToCart, (state, { cartItem }) => {
    const itemIndex = state.findIndex((item) => item.productId === cartItem.productId);
    if (itemIndex !== -1) {
      const newCart = state.map(currentItem => {
        if (currentItem.productId === cartItem.productId) {
          const newItem = { ...currentItem };
          newItem.quantity++;
          return newItem;
        }
        return currentItem;
      });
      return [...newCart];
    }
    return [...state, cartItem];
  }),
  on(deleteItemToCart, (state, { cartItem }) => {
    const itemIndex = state.findIndex((item) => item.productId === cartItem.productId);
    if (itemIndex !== -1 && cartItem.quantity > 1) {
      const newCart = state.map(currentItem => {
        if (currentItem.productId === cartItem.productId) {
          const newItem = { ...currentItem };
          newItem.quantity--;
          return newItem;
        }
        return currentItem;
      });
      return [...newCart];
    } else {
      return state.filter(item => item.id !== cartItem.id);
    }
  }),
);
