import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useStoreState } from 'store/hooks';
import Columns from 'components/Column/Columns';

const useStyles = makeStyles(theme => ({
  board: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  },
}));

const Board: React.FC = () => {
  const board = useStoreState(state => state.data.boards.currentBoard);
  const classes = useStyles();
  if (!board) return <div>cannot find currentboard</div>
  return (
    <div className={classes.board}>
      board: {board.id}
      <Columns board={board} />
    </div>
  );
}

export default Board;
