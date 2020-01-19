import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { StoreProvider } from 'easy-peasy';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import App from 'components/App';
import theme from 'theme';
import store from 'store';
import history from 'store/history';

export default () => {
  ReactDOM.render(
    <StoreProvider store={store}>
      <Router history={history}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <DndProvider backend={Backend}>
            <App />
          </DndProvider>
        </ThemeProvider>
      </Router>
    </StoreProvider>,
    document.getElementById('root'),
  );
};
