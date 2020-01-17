import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  column: {
  },
}));

const Column: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.column}>
      column
    </div>
  );
}

export default Column;
