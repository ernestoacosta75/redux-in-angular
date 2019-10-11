/**
 * The first action is used to specify that new currency data was requested.
 * The second one is used to specify that new currency data has been downloaded.
 */
import { Action } from '@ngrx/store';
import { Currency } from './../models/currency';
import { Currency } from '../models/currency';

export const CURRENCIESUPDATE = '[Currency] UpdateAll';
export const CURRENCIESUPDATED = '[Currency] UpdateAll';

export class CurrenciesUpdateAction implements Action {
  type = CURRENCIESUPDATE;
}

export class CurrenciesUpdatedAction implements Action {
  type = CURRENCIESUPDATED;

  constructor(public payload: Currency []) {}
}
