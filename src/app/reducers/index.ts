/**
 * Represents the "Application State".
 * This is because the Redux store can only consist of one JavaScript object.
 *
 */
import { Currency } from './../models/currency';
import * as fromAmmount from './amount';
import * as fromCurrency from './currency';

export interface State {
  amount: number;
  currencies: Currency [];
}

// Exporting the map of all reducers that the store expect.
export const reducers = {
  amount: fromAmmount.reducer,
  currencies: fromCurrency.reducer,
};

/**
 * Defining the selectors. They are just small and simple functions,
 * that allows us, to get only the part of the application state, that we are interested in.
 *
 * All they do is to return a sub-state from the big application state for convenience.
 */
export const getAmountState = (state: State) => state.amount;
export const getCurrencyRates = (state: State) => state.currencies;
