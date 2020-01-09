import { createStore, reducer } from 'easy-peasy';
import { routerMiddleware, routerReducer } from './router';
import model from 'model';

model.router = reducer(routerReducer);
export default createStore(model, {middleware: [routerMiddleware]});
