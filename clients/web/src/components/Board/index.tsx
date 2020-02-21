import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import BoardIcon from '@material-ui/icons/Dashboard';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useStoreState, useStoreActions } from 'store/hooks';
import { useParams } from 'react-router-dom';
import Columns from 'components/Column/Columns';

const useStyles = makeStyles(theme => ({
  board: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: 40,
    left: 70,
  },
}));

const Board: React.FC = () => {
  const { boardId } = useParams();
  const addSticky = useStoreActions(actions => actions.data.addSticky);
  const fetchBoard = useStoreActions(actions => actions.data.fetchBoardByName);
  useEffect(() => {
    if (boardId) fetchBoard(boardId);
  }, [boardId, fetchBoard]);
  const board = useStoreState(state => state.data.board);
  const classes = useStyles();

  if (!board) return <div>Loading...</div>
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Fab className={classes.fabButton} color="secondary" aria-label="add" onClick={() => addSticky()}>
            <AddIcon />
          </Fab>
          <BoardIcon />
          <Typography variant="h6" className={classes.title}>
            {board.id}
          </Typography>
        </Toolbar>
      </AppBar>

      <div className={classes.board}>
        <Columns board={board} />
      </div>
    </>
  );
}

export default Board;
