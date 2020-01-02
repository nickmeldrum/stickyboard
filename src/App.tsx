import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import { useStoreState, useStoreActions } from './hooks';
import { Sticky } from './model';

function StickyBox() {
  const sticky: Sticky = useStoreState(state => {
    return state.stickies.list.filter((s: Sticky) => s.board === 'board1')[0];
  });
  return (
    <div>{sticky.text}</div>
  );
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      <>© Copyright </>
      <Link color="inherit" href="https://www.deliverist.co.uk/">
        Deliverist
      </Link>
      <> 2019</>
    </Typography>
  );
}

const App: React.FC = () => {
  const updateStickyText = useStoreActions(actions => {
    return actions.stickies.updateStickyText;
  });

  const buttonClicked = () => {
    updateStickyText({
      id: '1',
      text: 'wow - fdsa',
      board: 'board1',
    });
  };

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          <Button variant="contained" color="primary" onClick={buttonClicked}>
            Hello World
          </Button>
          <StickyBox />
        </Typography>
        <Copyright />
      </Box>
    </Container>
  );
}

export default App;
