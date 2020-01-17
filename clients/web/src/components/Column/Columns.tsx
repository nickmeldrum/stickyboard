import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Board } from 'model/data';
import Column from 'components/Column/Column';

export interface ColumnsProps {
  board: Board;
};

const useStyles = makeStyles(theme => ({
  columns: {
  },
}));

const Columns: React.FC<ColumnsProps> = ({board}) => {
  const classes = useStyles();
  return (
    <div className={classes.columns}>
    {board.columns.map(col => <Column
        key={col}
        column={col}
      />
    )}
    </div>
  );
}

export default Columns;
