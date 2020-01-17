import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

export interface ColumnProps {
  column: String;
};

const useStyles = makeStyles(theme => ({
  column: {
    flex: 1,
    margin: '5px',
    border: '1px solid rgba(0,0,0,0)'
  },
  heading: {
    fontSize: '20px',
    padding: '10px',
    borderBottom: '1px solid rgba(120,120,120,0.5)',
    margin: '0px 5px 15px 5px'
  },
}));

const Column: React.FC<ColumnProps> = ({column}) => {
  const classes = useStyles();
  return (
    <>
    <div className={classes.column}>
      <h2 className={classes.heading}>{column}</h2>
    </div>
  </>
  );
}

export default Column;
