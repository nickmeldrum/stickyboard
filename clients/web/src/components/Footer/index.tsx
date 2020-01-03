import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const Footer: React.FC = () => (
  <Typography variant="body2" color="textSecondary" align="center">
    <>© Copyright </>
    <Link color="inherit" href="https://www.deliverist.co.uk/">
      Deliverist
    </Link>
    <> 2019</>
  </Typography>
);

export default Footer;
