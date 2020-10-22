import React from "react";
import { Grid, Typography } from "@material-ui/core";
import FooterStyles from "../theme/FooterStyles";

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
        <Grid item className={classes.gridItem} xs={3} align="justify">
          <Typography variant="body1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic saepe
            ut impedit necessitatibus accusantium!
          </Typography>
        </Grid>
        <Grid item className={classes.gridItem} xs={3} align="justify">
          <Typography variant="body1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic saepe
            ut impedit necessitatibus accusantium!
          </Typography>
        </Grid>

        <Grid item className={classes.gridItem} xs={3}>
          <Typography variant="h2">h2 Footer</Typography>
          <Typography variant="h3">h3 Footer</Typography>
          <Typography variant="h4">h4 Footer</Typography>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
