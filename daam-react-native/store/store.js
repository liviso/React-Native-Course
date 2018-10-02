import { createStore, applyMiddleware} from 'redux';
import { reducer} from './reducer.js';
import middlewares from './middleware.js'

const initialState = {
    films: [],
    selected_date: new Date(),
    selected_films: {}
  }
console.log("3");
export const store = createStore(reducer, initialState, applyMiddleware(...middlewares));