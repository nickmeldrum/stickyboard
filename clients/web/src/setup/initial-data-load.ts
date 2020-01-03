import store from 'store';
import api from 'api';

const actions = store.getActions();

export default () => {
  api.boards.get().then(data => actions.boards.initialLoad(data));
  api.stickies.get().then(data =>  actions.stickies.initialLoad(data));
};
