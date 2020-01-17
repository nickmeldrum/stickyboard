import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

export interface ColumnProps {
  column: String;
};

const useStyles = makeStyles(theme => ({
  column: {
  },
}));

const Column: React.FC<ColumnProps> = ({column}) => {
  const classes = useStyles();
  return (
    <div className={classes.column}>
      {column}
    </div>
  );
}

export default Column;
