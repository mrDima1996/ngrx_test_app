import * as fromTopping from '../actions/topping.actions';
import { Topping } from '../../models/topping.model';

export interface ToppingState {
	entities: { [id: number]: Topping };
	loaded: boolean;
	loading: boolean;
	selectedToppings: number[];
}

export const initialState: ToppingState = {
	entities: {},
	loaded: false,
	loading: false,
	selectedToppings: []
}

export function reducer(
	state = initialState,
	action: fromTopping.ToppingAction
): ToppingState {
	switch(action.type) {
		case fromTopping.VISUALIZE_TOPPINGS: {
			const selectedToppings = action.payload;

			return {
				...state,
				selectedToppings
			}
		}

		case fromTopping.LOAD_TOPPINGS: {
			return {
				...state,
				loading: true
			}
		}
		case fromTopping.LOAD_TOPPINGS_SUCCESS: {
			const topping = action.payload;
			const entities = topping.reduce(
				(entities: {[id: number]: Topping}, topping: Topping) =>{
					return {
						...entities,
						[topping.id]: topping
					}
				},	{
					...state.entities
				}
			)
			return {
				...state,
				loaded: true,
				loading: false,
				entities
			}
		}
		case fromTopping.LOAD_TOPPINGS_FAIL: {
			return {
				...state,
				loaded: false,
				loading: false,
			}
		}
	}
	return state;
}

export const getToppingsEntities = (state: ToppingState) => state.entities;
export const getToppingsLoaded  = (state: ToppingState) => state.loaded;
export const getToppingsLoading  = (state: ToppingState) => state.loading;
export const getSelectedToppings  = (state: ToppingState) => state.selectedToppings;