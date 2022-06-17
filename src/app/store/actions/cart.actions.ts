import { createAction, props } from '@ngrx/store';
import { Cart as CartItem } from '../../core/model/cart.model';

export enum CartActionTypes {
  GET_ITEMS = 'Get Items',
  ADD_ITEM = 'Add Item',
  DELETE_ITEM = 'Delete Item',
  DELETE_All_ITEM = 'Delete All Item',
  UPDATE_ITEM = 'Update Item'
}

export const addItemToCart = createAction(CartActionTypes.ADD_ITEM, props<{ cartItem: CartItem }>());
