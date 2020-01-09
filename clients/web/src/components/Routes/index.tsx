import React from 'react';
import { Route, withRouter } from 'react-router';

const Routes: React.FC = () => {
  return (
    <>
    <Route exact path="/">
      root
    </Route>
    <Route path="/boards">
      boards
    </Route>
    </>
  );
}

export default withRouter(Routes);
