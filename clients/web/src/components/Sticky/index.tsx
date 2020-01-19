import React from 'react';
import Button from '@material-ui/core/Button';
import { useDrag } from 'react-dnd';
import Types from 'components/DnD/types';
import { Sticky as StickyModel } from 'model/data';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
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
  card: {
    margin: '5px',
  },
}));

const Sticky: React.FC<StickyProps> = ({ sticky }) => {
  const classes = useStyles();
  const [{ isDragging }, drag] = useDrag({
    item: { id: sticky.id, column: sticky.column, type: Types.Sticky },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  });
  const buttonClicked = () => {};
  return (
    <div className={classes.cardContainer} ref={drag}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardContent>
            <Typography variant="body1" color="textSecondary" component="p">
              {sticky.text + isDragging}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={buttonClicked}>Edit</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Sticky;
