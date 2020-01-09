import { createReduxHistory } from 'store/router';
import store from 'store';

const history = createReduxHistory(store);

export default history;
