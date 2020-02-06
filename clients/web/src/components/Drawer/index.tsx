import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { useStoreState, useStoreActions } from 'store/hooks';
import DrawerMenu from './DrawerMenu';

const Drawer: React.FC = () => {
  const toggleDrawer = useStoreActions(actions => {
    return actions.ui.menus.toggleDrawer;
  });

  const drawerOpen: boolean = useStoreState(state => {
    return state.ui.menus.isDrawerOpen;
  });

  const onOpen = () => toggleDrawer();
  const onClose = () => toggleDrawer();

  return (
      <SwipeableDrawer
        open={drawerOpen}
        onOpen={onOpen}
        onClose={onClose}
      >
        <DrawerMenu />
      </SwipeableDrawer>
  );
}

export default Drawer;
