import React from 'react';
import Button from '@material-ui/core/Button';
import { Sticky as StickyModel } from 'model/data';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
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
  card: {
    margin: '5px',
  },
}));

const Sticky: React.FC<StickyProps> = ({ sticky }) => {
  const classes = useStyles();
  const updateStickyText = useStoreActions(actions => {
    return actions.data.stickies.updateStickyText;
  });
  const buttonClicked = () => {
    updateStickyText({
      id: '1',
      text: 'wow - fdsa',
      column: 'column1',
    });
  };
  return (
    <div className={classes.cardContainer}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardContent>
            <Typography variant="body1" color="textSecondary" component="p">
              {sticky.text}
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
