import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useStoreActions } from 'store/hooks';

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const TopAppBar: React.FC = () => {
  const toggleDrawer = useStoreActions(actions => {
    return actions.ui.menus.toggleDrawer;
  });

  const menuButtonClicked = () => toggleDrawer();

  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={menuButtonClicked}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit">
          Stickyboard
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopAppBar;
