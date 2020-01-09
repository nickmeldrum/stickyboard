import React from 'react';
import TopAppBar from 'components/TopAppBar';
import Drawer from 'components/Drawer';
import Routes from 'components/Routes';

const App: React.FC = () => {
  return (
    <>
      <TopAppBar />
      <Drawer />
      <Routes />
    </>
  );
}

export default App;
