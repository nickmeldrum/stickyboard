import React from 'react';
import TopAppBar from 'components/TopAppBar';
import Drawer from 'components/Drawer';
/*
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Sticky from '../Sticky';
import Footer from '../Footer';
 */

const App: React.FC = () => {
  return (
    <>
      <TopAppBar />
      <Drawer />
    </>
    /*
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          <Sticky />
        </Typography>
        <Footer />
      </Box>
    </Container>
     */
  );
}

export default App;
