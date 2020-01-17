import { createStore } from 'easy-peasy';
import { routerMiddleware } from './router';
import model from 'model';

export default createStore(model, {middleware: [routerMiddleware]});
