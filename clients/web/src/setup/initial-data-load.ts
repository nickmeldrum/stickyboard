import store from 'store';
import api from 'api';

const actions = store.getActions();

export default () => {
  api.boards.get().then(data => actions.data.initialLoad(data));
};
