import { createReducer, on } from '@ngrx/store';
import { Product } from '../../models/types/product';
import { addProduct, removeProduct } from '../actions/shopping-cart.actions';

export const initialState: ReadonlyArray<Product> = [];

export const shoppingCartReducer = createReducer(
  initialState,
  on(addProduct, (state, action: { product: Product }) => [...state, action.product]),
  on(removeProduct, (state, action: { product: Product }) =>
    [...state.filter((product: Product) => product.title !== action.product.title)])
);