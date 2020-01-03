import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import { createStore, StoreProvider, action } from 'easy-peasy';
import * as serviceWorker from './serviceWorker';
import { Model } from './model';

const model: Model = {
  boards: {
    items: {},
    initialLoad: action((state, payload) => {
      state.items = payload;
    }),
  },
  stickies: {
    items: [],
    initialLoad: action((state, payload) => {
      state.items = payload;
    }),
    updateStickyText: action((state, payload) => {
      const sticky = state.items.find(s => s.id === payload.id)
      if (!sticky) throw new Error('no sticky');
      sticky.text = payload.text;
      fetch(`http://localhost:4000/api/stickies/${sticky.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(sticky),
      }).then((response) => {
        console.log('done');
      });
    }),
  },
};

const store = createStore(model);

ReactDOM.render(
  <StoreProvider store={store}>
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <App />
  </ThemeProvider>
  </StoreProvider>,
  document.getElementById('root'),
);

fetch('http://localhost:4000/api/boards').then(response => response.json()).then((data) => {
  const actions = store.getActions();
  actions.boards.initialLoad(data);
});
fetch('http://localhost:4000/api/stickies').then(response => response.json()).then((data) => {
  const actions = store.getActions();
  actions.stickies.initialLoad(data);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
