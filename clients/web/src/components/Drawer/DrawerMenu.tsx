import React from 'react';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import AddIcon from '@material-ui/icons/Add';
import BoardIcon from '@material-ui/icons/Dashboard';
import { useStoreState } from 'store/hooks';
import { BoardList } from 'model/data';

const DrawerMenu: React.FC = () => {
  const boards: BoardList = useStoreState(state => state.data.boards.items);
  return (
    <div>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Boards
          </ListSubheader>
        }
      >
          <ListItem button key='Add new board'>
            <ListItemIcon><AddIcon /></ListItemIcon>
            <ListItemText primary='Add new board' />
          </ListItem>

            {Object.values(boards).map(board => {
              return (
                <ListItem button key={board.id}>
                  <ListItemIcon><BoardIcon /></ListItemIcon>
                  <ListItemText primary={board.id} />
                </ListItem>
              );
            })}
      </List>
      <Divider />
    </div>
  );
}

export default DrawerMenu;
