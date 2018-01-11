import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { map, catchError, switchMap } from 'rxjs/operators';

import * as toppingActions from '../actions/topping.actions';
import * as fromServices from '../../services/toppings.service';

@Injectable()
export class ToppingsEffect {
	constructor(
		private actions$: Actions,
		private toppingService: fromServices.ToppingsService
	){}

	@Effect()
	LoadTopping$ = this.actions$.ofType(toppingActions.LOAD_TOPPINGS).pipe(
		switchMap(() => {
			return this.toppingService
			.getToppings()
			.pipe(
				map(topping => new toppingActions.LoadToppingsSuccess(topping)),
				catchError(error => of(new toppingActions.LoadToppingsFail(error)))
			)
		})
	)
}