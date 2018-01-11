import { Action } from '@ngrx/store';

import { Topping } from '../../models/topping.model';

export const LOAD_TOPPINGS = '[Products] Load toppings';
export const LOAD_TOPPINGS_FAIL = '[Products] Load toppings fail';
export const LOAD_TOPPINGS_SUCCESS = '[Products] Load toppings success';

export const VISUALIZE_TOPPINGS = '[Products] Visualize toppings';


export class LoadToppings implements Action {
	readonly type = LOAD_TOPPINGS;
}

export class LoadToppingsFail implements Action {
	readonly type = LOAD_TOPPINGS_FAIL;
	constructor(public payload: any) {};
}

export class LoadToppingsSuccess implements Action {
	readonly type = LOAD_TOPPINGS_SUCCESS;
	constructor(public payload: Topping[]) {};
}

export class VisualizeToppings implements Action {
	readonly type = VISUALIZE_TOPPINGS;
	constructor(public payload: number[]) {};
}

export type ToppingAction = 
| LoadToppings
| LoadToppingsFail
| LoadToppingsSuccess
| VisualizeToppings;