import { createReducer, on } from '@ngrx/store';
import { addItemToCart } from '../actions/cart.actions';
import { Cart as CartItem } from '../../core/model/cart.model';

// const initialState: CartItem[] = [];
const initialState: CartItem[] = [{"id":"cart2","productId":"product1","quantity":1,"name":"ReactJS Sticker","price":2,"thumbnail":"https://res.cloudinary.com/cloudinaryassets/image/upload/v1654872873/angular-shopping-cart/reactjs_gncbuq.jpg"},{"id":"cart2","productId":"product3","quantity":1,"name":"AngularJS Sticker","price":3,"thumbnail":"https://res.cloudinary.com/cloudinaryassets/image/upload/v1654872872/angular-shopping-cart/angularjs_gqudvk.jpg"}];

export const cartReducer = createReducer(
  initialState,
  on(addItemToCart, (state, { cartItem }) => [...state, cartItem])
);

const handleAddItemToCart = () => {

};
