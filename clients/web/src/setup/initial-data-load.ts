import store from 'store';
import api from 'api';

const actions = store.getActions();

export default () => {
  api.boards.get().then(data => actions.data.boards.initialLoad(data));
  api.stickies.get().then(data =>  actions.data.stickies.initialLoad(data));
};
