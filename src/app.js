import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";


const store = configureStore();

// addExpense -> Water bill
store.dispatch(addExpense({ description: "Water bill", amount: 4500, createdAt: 14000 }));

// addExpense -> Gas bill
store.dispatch(addExpense({ description: "Gas bill", amount: 250, createdAt: 1000 }));
store.dispatch(addExpense({ description: "Rent", amount: 109500 }));

// setTextFilter -> bill
/*store.dispatch(setTextFilter("water"));

setTimeout(() => {
  store.dispatch(setTextFilter("bill"));
}, 2000);
*/

// getVisibileExpenses -> print visible ones to screen
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

// console.log(store.getState());

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
