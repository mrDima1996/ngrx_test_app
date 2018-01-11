import { Action } from '@ngrx/store';
import { Pizza } from '../../models/pizza.model';

export const LOAD_PIZZAS = '[Product] Load Pizzas';
export const LOAD_PIZZAS_ERROR = '[Product]  Load Pizzas error';
export const LOAD_PIZZAS_SUCCESS = '[Product]  Load Pizzas success';

export class loadPizzas implements Action {
	readonly type = LOAD_PIZZAS;
}

export class loadPizzasError implements Action {
	readonly type = LOAD_PIZZAS_ERROR;
	constructor(public payload: any){};
}

export class loadPizzasSuccess implements Action {
	readonly type = LOAD_PIZZAS_SUCCESS;
	constructor(public payload: Pizza[]){};
}

export const CREATE_PIZZA = '[Product] Create Pizzas';
export const CREATE_PIZZA_ERROR = '[Product] Create Pizzas Error';
export const CREATE_PIZZA_SUCCESS = '[Product] Create Pizzas Success';

export class CreatePizza implements Action {
	readonly type = CREATE_PIZZA;
	constructor(public payload: Pizza){};
}

export class CreatePizzaError implements Action {
	readonly type = CREATE_PIZZA_ERROR;
	constructor(public payload: any){};
}

export class CreatePizzaSuccess implements Action {
	readonly type = CREATE_PIZZA_SUCCESS;
	constructor(public payload: Pizza){};
}

export const UPDATE_PIZZA = '[Product] Update Pizzas';
export const UPDATE_PIZZA_ERROR = '[Product] Update Pizzas Error';
export const UPDATE_PIZZA_SUCCESS = '[Product] Update Pizzas Success';

export class UpdatePizza implements Action {
	readonly type = UPDATE_PIZZA;
	constructor(public payload: Pizza){};
}

export class UpdatePizzaError implements Action {
	readonly type = UPDATE_PIZZA_ERROR;
	constructor(public payload: any){};
}

export class UpdatePizzaSuccess implements Action {
	readonly type = UPDATE_PIZZA_SUCCESS;
	constructor(public payload: Pizza){};
}

export const REMOVE_PIZZA = '[Product] Remove Pizzas';
export const REMOVE_PIZZA_ERROR = '[Product] Remove Pizzas Error';
export const REMOVE_PIZZA_SUCCESS = '[Product] Remove Pizzas Success';

export class RemovePizza implements Action {
	readonly type = REMOVE_PIZZA;
	constructor(public payload: Pizza){};
}

export class RemovePizzaError implements Action {
	readonly type = REMOVE_PIZZA_ERROR;
	constructor(public payload: any){};
}

export class RemovePizzaSuccess implements Action {
	readonly type = REMOVE_PIZZA_SUCCESS;
	constructor(public payload: Pizza){};
}

export type pizzasActions = 
| loadPizzas 
| loadPizzasError 
| loadPizzasSuccess
| CreatePizza
| CreatePizzaError
| CreatePizzaSuccess
| UpdatePizza
| UpdatePizzaError
| UpdatePizzaSuccess
| RemovePizza
| RemovePizzaError
| RemovePizzaSuccess;