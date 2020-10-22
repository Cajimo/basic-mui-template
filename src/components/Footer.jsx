import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import FooterStyles from '../theme/FooterStyles';

const Footer = () => {
  const classes = FooterStyles();
  return (
    <footer className={classes.stayBottom}>
      <Grid
        container
        className={classes.gridContainer}
        justify="space-evenly"
        alignContent="center"
      >
        <Grid item style={{ backgroundColor: 'white' }}>
          <Typography variant="h2">h2 Footer</Typography>
        </Grid>
        <Grid item style={{ backgroundColor: 'white' }}>
          <Typography variant="h2">h2 Footer</Typography>
        </Grid>
        <Grid item style={{ backgroundColor: 'white' }}>
          <Typography variant="h2">h2 Footer</Typography>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
