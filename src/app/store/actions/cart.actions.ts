import { createAction, props } from '@ngrx/store';
import { Cart as CartItem } from '../../core/model/cart.model';

export enum CartActionTypes {
  GET_ITEMS = 'Get Items',
  ADD_ITEM = 'Add Item',
  DELETE_ITEM = 'Delete Item',
}

export const addItemToCart = createAction(CartActionTypes.ADD_ITEM, props<{ cartItem: CartItem }>());
export const deleteItemToCart = createAction(CartActionTypes.DELETE_ITEM, props<{ cartItem: CartItem }>());
