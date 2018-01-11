import { ActionReducerMap, createSelector ,createFeatureSelector } from '@ngrx/store'; 
import * as fromPizzas from './pizzas.reducer';
import * as fromTopping from './topping.reducer';

export interface ProductsState {
	pizzas: fromPizzas.PizzasState,
	toppings: fromTopping.ToppingState
}

export const reducers: ActionReducerMap<ProductsState>  = {
	pizzas: fromPizzas.reducer,
	toppings: fromTopping.reducer
}

export const getProductsState = createFeatureSelector<ProductsState>(
	'products'
);
