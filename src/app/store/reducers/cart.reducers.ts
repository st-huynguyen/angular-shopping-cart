import { createReducer, on } from '@ngrx/store';
import { addItemToCart } from '../actions/cart.actions';
import { Cart as CartItem } from '../../core/model/cart.model';

const initialState: CartItem[] = [];

export const cartReducer = createReducer(
  initialState,
  on(addItemToCart, (state, { cartItem }) => [...state, cartItem])
);
