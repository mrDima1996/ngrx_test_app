import * as fromPizza from '../actions/pizzas.actions';
import { Pizza } from '../../models/pizza.model';

export interface PizzasState {
	entities: { [id: number] : Pizza},
	loading: boolean,
	loaded: boolean
}

export const initialState: PizzasState = {
	entities: {},
	loading: false,
	loaded: false
}

export function reducer(
	state = initialState, 
	action:fromPizza.pizzasActions
): PizzasState {

	switch(action.type) {
		case fromPizza.LOAD_PIZZAS: {
			return {
				...state,
				loading: true,
			};
		}
		case fromPizza.LOAD_PIZZAS_ERROR: {
			return {
				...state,
				loaded: true,
				loading: false,
			};
		}
		case fromPizza.LOAD_PIZZAS_SUCCESS: {
			const pizzas = action.payload;
			const entities = pizzas.reduce(
				(entities: {[id: number]: Pizza}, pizza: Pizza) =>{
					return {
						...entities,
						[pizza.id]: pizza
					}
				},
				{
					...state.entities
				}
			)
			return {
				...state,
				loaded: false,
				loading: false,
				entities
			};
		}
		case fromPizza.UPDATE_PIZZA_SUCCESS:
		case fromPizza.CREATE_PIZZA_SUCCESS: {
			const pizza = action.payload;
			const entities = {
				...state.entities,
				[pizza.id]: pizza
			}

			return {
				...state,
				entities
			}
		}

		case fromPizza.REMOVE_PIZZA_SUCCESS: {
			const pizza = action.payload;
			const { [pizza.id]: removed, ...entities} = state.entities;
		
			return {
				...state,
				entities
			}
		}


	}

	return state;
}

export const getPizzasLoading = (state: PizzasState) => state.loading;
export const getPizzasLoaded = (state: PizzasState) => state.loaded;
export const getPizzasEntities = (state: PizzasState) => state.entities;