import { createReducer, on } from '@ngrx/store';
import { addItemToCart, deleteItemToCart } from '../actions/cart.actions';
import { Cart as CartItem } from '../../core/model/cart.model';

const initialState = {
  cartList: [] as CartItem[],
  totalPrice: 0,
  totalItems: 0,
};

export const cartReducer = createReducer(
  initialState,
  on(addItemToCart, (state, { cartItem }) => {
    const totalPrice = state.totalPrice + cartItem.price;
    const totalItems = state.totalItems + 1;
    const itemIndex = state.cartList.findIndex((item) => item.productId === cartItem.productId);
    if (itemIndex !== -1) {
      const newCart = state.cartList.map(currentItem => {
        if (currentItem.productId === cartItem.productId) {
          const newItem = { ...currentItem };
          newItem.quantity++;
          return newItem;
        }
        return currentItem;
      });
      return { totalItems, totalPrice, cartList: [...newCart]};
    }
    return { totalItems, totalPrice, cartList: [...state.cartList, cartItem]};
  }),
  on(deleteItemToCart, (state, { cartItem }) => {
    const totalPrice = state.totalPrice - cartItem.price;
    const totalItems = state.totalItems - 1;
    const itemIndex = state.cartList.findIndex((item) => item.productId === cartItem.productId);
    if (itemIndex !== -1 && cartItem.quantity > 1) {
      const newCart = state.cartList.map(currentItem => {
        if (currentItem.productId === cartItem.productId) {
          const newItem = { ...currentItem };
          newItem.quantity--;
          return newItem;
        }
        return currentItem;
      });
      return { totalPrice, totalItems, cartList: [...newCart]};
    } else {
      return { totalPrice, totalItems, cartList: state.cartList.filter(item => item.id !== cartItem.id)};
    }
  }),
);
