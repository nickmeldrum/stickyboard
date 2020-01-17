import React from 'react';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import AddIcon from '@material-ui/icons/Add';
import BoardIcon from '@material-ui/icons/Dashboard';
import HomeIcon from '@material-ui/icons/Home';
import { useStoreState, useStoreActions } from 'store/hooks';

const DrawerMenu: React.FC = () => {
  const boardNames = useStoreState(state => state.data.boards.itemNames);
  const push = useStoreActions(actions => actions.routing.push);
  const toggleDrawer = useStoreActions(actions => actions.ui.toggleDrawer);

  const browseTo = (url: string) => {
    toggleDrawer();
    push(url);
  };

  return (
    <div>
      <ListItem button key='Home' onClick={() => browseTo('/')}>
        <ListItemIcon><HomeIcon /></ListItemIcon>
        <ListItemText primary='Home' />
      </ListItem>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Boards
          </ListSubheader>
        }
      >
            <ListItem button key='Add new board' onClick={() => browseTo('/boards/new')}>
            <ListItemIcon><AddIcon /></ListItemIcon>
            <ListItemText primary='Add new board' />
          </ListItem>

            {boardNames.map(boardName => {
              return (
            <ListItem button key={boardName} onClick={() => browseTo(`/boards/${boardName}`)}>
                  <ListItemIcon><BoardIcon /></ListItemIcon>
                  <ListItemText primary={boardName} />
                </ListItem>
              );
            })}
      </List>
      <Divider />
    </div>
  );
}

export default DrawerMenu;
