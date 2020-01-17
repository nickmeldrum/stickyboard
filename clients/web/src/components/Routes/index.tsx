import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Board from 'components/Board';

const Routes: React.FC = () => {
  return (
    <Switch>
    <Route exact path="/">
      what should be on the root route?!
    </Route>
    <Route path="/boards/new">
      new board
    </Route>
    <Route path="/boards/:boardId">
      <Board />
    </Route>
    <Route path="/boards">
      list of boards
    </Route>
    </Switch>
  );
}

export default withRouter(Routes);
