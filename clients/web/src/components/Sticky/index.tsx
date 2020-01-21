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
}));

const Sticky: React.FC<StickyProps> = ({ sticky }) => {
  const [isEditing, setIsEditing] = useState(false);
  const classes = useStyles();
  const [{ isDragging }, drag] = useDrag({
    item: { id: sticky.id, column: sticky.column, type: Types.Sticky },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  });
  const startEditing = () => {
    setIsEditing(true);
  };
  const deleteStickyClicked = () => {
    console.log('delete sticky todo');
  };

  let stickyContainerClasses = classes.cardContainer;
  if (isDragging) stickyContainerClasses = `${stickyContainerClasses} ${classes.dragging}`;

  const StickyText = (
    <Typography variant="body1" color="textSecondary" component="p" onClick={startEditing}>{sticky.text}</Typography>
  );
  return (
    <div className={stickyContainerClasses} ref={drag}>
      <Card className={classes.card}>
        <CardContent>
          { isEditing ? <EditText /> : StickyText }
        </CardContent>
        <CardActions>
          <IconButton aria-label="delete sticky" onClick={deleteStickyClicked}>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default Sticky;
