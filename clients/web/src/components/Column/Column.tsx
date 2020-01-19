import React from 'react';
import { useDrop } from 'react-dnd';
import Types from 'components/DnD/types';
import { makeStyles } from '@material-ui/core/styles';
import { Sticky as StickyModel } from 'model/data';
import Sticky from 'components/Sticky';
import { useStoreActions } from 'store/hooks';

export interface ColumnProps {
  column: String;
  stickies: StickyModel[];
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

const Column: React.FC<ColumnProps> = ({column, stickies}) => {
  const classes = useStyles();
  const updateStickyColumn = useStoreActions(actions => actions.data.boards.updateStickyColumn);
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: Types.Sticky,
    canDrop: (item: any) => item.currentColumn !== column,
    drop: (item: any) => {
      updateStickyColumn({ id: item.id, newColumn: column as string});
    },
    collect: monitor => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  });
  return (
  <>
  <div className={classes.column} ref={drop}>
    <h2 className={classes.heading}>{column + isOver.toString()}</h2>
    <ul>{stickies.map(sticky =>
      <Sticky
          key={sticky.id}
          sticky={sticky}
      />)}
    </ul>
  </div>
  </>
  );
}

export default Column;
