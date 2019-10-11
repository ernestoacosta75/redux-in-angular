/**
 * Whenever the amount's input value changes, the onAmountChange() method is called
 * inside this component.
 */
import { Component } from '@angular/core';
import { AmountChangeAction } from './actions/amount';
import { Store } from '@ngrx/store';
import * as fromRoot from './reducers';
import { Currency } from './models/currency';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'currency-conversion';

  public amount$: Observable<number>;
  public currencyRates$: Observable<Currency[]>;

  constructor(public store: Store<fromRoot.State>) {
    // Getting the observables from the store using the select() method.
    this.amount$ = store.select(fromRoot.getAmountState);
    this.currencyRates$ = store.select(fromRoot.getCurrencyRates);
  }

  onAmountChange(amount: string) {
    const aNumber: number = parseFloat(amount);

    if(!isNaN(aNumber)) {
      this.store.dispatch(new AmountChangeAction(aNumber));
    }
  }
}
