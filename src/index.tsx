import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import { createStore } from 'easy-peasy';
import { StoreProvider } from 'easy-peasy';
import { action } from 'easy-peasy';
import * as serviceWorker from './serviceWorker';
import { Model  } from './model';

const model: Model = {
  boards: {
    board1: {
      columns: [ 'todo', 'doing', 'done' ],
    },
  },
  stickies: {
    list: [
      {
        id: '1',
        board: 'board1',
        text: 'oh hai',
      },
    ],
    updateStickyText: action((state, payload) => {
      const sticky = state.list.find(s => s.id === payload.id)
      if (!sticky) throw new Error('no sticky');
      sticky.text = payload.text;
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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
