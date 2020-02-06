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
    border: '1px solid rgba(0,0,0,0)',
    '& h2': {
      fontSize: '20px',
      padding: '10px',
      borderBottom: '1px solid rgba(120,120,120,0.5)',
      margin: '0px 5px 15px 5px',
    },
  },
  highlight: {
    border: '1px dashed rgb(255, 64, 129)',
    '& h2': {
      borderBottom: '1px dashed rgb(255, 64, 129)',
    },
  },
}));

const Column: React.FC<ColumnProps> = ({column, stickies}) => {
  const updateStickyColumn = useStoreActions(actions => actions.data.updateStickyColumn);
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: Types.Sticky,
    canDrop: (item: any) => item.column !== column,
    drop: (item: any) => updateStickyColumn({ id: item.id, newColumn: column as string}),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  });
  const classes = useStyles();
  let columnClass = classes.column;
  if (isOver && canDrop) columnClass = `${columnClass} ${classes.highlight}`;
  return (
  <>
  <div className={columnClass} ref={drop}>
    <h2>{column}</h2>
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
