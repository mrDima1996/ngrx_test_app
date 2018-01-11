import { Injectable } from '@angular/core';

import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Effect, Actions } from '@ngrx/effects';

import * as pizzasActons from '../actions/pizzas.actions';
import * as fromServices from '../../services';

@Injectable()
export class PizzasEffect {
	constructor(
		private actions$: Actions,
		private pizzaService: fromServices.PizzasService

	){

	}

	@Effect()
	loadPizza$ = this.actions$.ofType(pizzasActons.LOAD_PIZZAS)
	.pipe(
		switchMap(() => {
			return this.pizzaService.getPizzas().pipe(
				map(pizzas => new pizzasActons.loadPizzasSuccess(pizzas)),
				catchError(error => of(new pizzasActons.loadPizzasError(error)))
			)
		})
	)

	@Effect()
	createPizza$ = this.actions$
		.ofType(pizzasActons.CREATE_PIZZA)
		.pipe(
			map((action: pizzasActons.CreatePizza) => action.payload),
			switchMap(pizza=> {
				return this.pizzaService
					.createPizza(pizza)
					.pipe(
						map(pizza => new pizzasActons.CreatePizzaSuccess(pizza)),
						catchError(error => of(new pizzasActons.CreatePizzaError(error)))

					)
			})
		)

	@Effect()
	updatePizza$ = this.actions$
		.ofType(pizzasActons.UPDATE_PIZZA)
		.pipe(
			map((action: pizzasActons.UpdatePizza) => action.payload),
			switchMap(pizza=> {
				return this.pizzaService
					.updatePizza(pizza)
					.pipe(
						map(pizza => new pizzasActons.UpdatePizzaSuccess(pizza)),
						catchError(error => of(new pizzasActons.UpdatePizzaError(error)))

					)
			})
		)

	@Effect()
	removePizza$ = this.actions$
		.ofType(pizzasActons.REMOVE_PIZZA)
		.pipe(
			map((action: pizzasActons.RemovePizza) => action.payload),
			switchMap(pizza=> {
				return this.pizzaService
					.removePizza(pizza)
					.pipe(
						map(() => new pizzasActons.RemovePizzaSuccess(pizza)),
						catchError(error => of(new pizzasActons.RemovePizzaError(error)))

					)
			})
		)
}