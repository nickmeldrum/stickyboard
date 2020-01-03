import store from 'store';

export default () => {
  fetch('http://localhost:4000/api/boards').then(response => response.json()).then((data) => {
    const actions = store.getActions();
    actions.boards.initialLoad(data);
  });
  fetch('http://localhost:4000/api/stickies').then(response => response.json()).then((data) => {
    const actions = store.getActions();
    actions.stickies.initialLoad(data);
  });
};
