import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete'
import { useDrag } from 'react-dnd';
import Types from 'components/DnD/types';
import EditText from './EditText';
import { Sticky as StickyModel } from 'model/data';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useStoreActions } from 'store/hooks';

export interface StickyProps {
  sticky: StickyModel;
};

const useStyles = makeStyles(theme => ({
  cardContainer: {
    width: '260px',
    float: 'left',
  },
  dragging: {
    opacity: '0.5',
  },
  card: {
    margin: '5px',
  },
  deleteButton: {
    marginLeft: 'auto',
  },
}));

const Sticky: React.FC<StickyProps> = ({ sticky }) => {
  const [isEditing, setIsEditing] = useState(false);
  const updateStickyText = useStoreActions(actions => actions.data.updateStickyText);
  const deleteSticky = useStoreActions(actions => actions.data.deleteSticky);
  const classes = useStyles();
  const [{ isDragging }, drag] = useDrag({
    item: { id: sticky.id, column: sticky.column, type: Types.Sticky },
    begin: () => { setIsEditing(false); },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  });
  const startEditing = () => {
    setIsEditing(true);
  };
  const deleteStickyClicked = () => {
    deleteSticky(sticky.id);
  };

  const acceptChanges = (text: string) => {
    updateStickyText({id: sticky.id, newText: text});
    setIsEditing(false);
  };

  const cancelEditing = () => {
    setIsEditing(false);
  };

  let stickyContainerClasses = classes.cardContainer;
  if (isDragging) stickyContainerClasses = `${stickyContainerClasses} ${classes.dragging}`;

  const StickyText = (
    <Typography style={{whiteSpace: 'pre-line'}} variant="body1" color="textSecondary" component="p" onClick={startEditing}>{sticky.text}</Typography>
  );
  return (
    <div className={stickyContainerClasses} ref={drag}>
      <Card className={classes.card}>
        <CardContent>
          { isEditing || sticky.id === 'new' ? <EditText initialText={sticky.text} acceptChanges={acceptChanges} cancelEditing={cancelEditing} /> : StickyText }
        </CardContent>
        <CardActions>
          <IconButton className={classes.deleteButton} aria-label="delete sticky" onClick={deleteStickyClicked}>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default Sticky;
