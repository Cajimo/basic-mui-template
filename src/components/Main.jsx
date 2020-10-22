import { Grid, Typography } from "@material-ui/core";
import React, { Fragment } from "react";
import {} from "@material-ui/core";
import MainStyles from "../theme/MainStyles";

const Main = () => {
  const classes = MainStyles();
  return (
    <Fragment>
      <Grid
        container
        className={classes.gridContainer}
        alignItems="center"
        alignContent="center"
        justify="center"
      >
        <Grid item container direction="column" justify="space-evenly" xs>
          <Grid item style={{ backgroundColor: "white" }}>
            <Typography variant="h1">h1 Main Content Left</Typography>
            <Typography variant="h2">h2 Main Content Left</Typography>
            <Typography variant="h3">h3 Main Content Left</Typography>
            <Typography variant="h4">h4 Main Content Left</Typography>
          </Grid>
          <Grid item style={{ backgroundColor: "white" }}>
            <Typography variant="body1">body1 Main Content Left</Typography>
          </Grid>
        </Grid>
        <Grid item style={{ backgroundColor: "yellow" }} xs>
          <Typography variant="h5">h5 Main Content Right</Typography>
          <Typography variant="h6">h6 Main Content Right</Typography>
          <Typography variant="body1">
            body1....Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aut ullam maiores sunt enim minus praesentium tempore architecto
            soluta dignissimos provident voluptate ipsam ducimus mollitia sequi,
            et, harum ratione a iure!{" "}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        className={classes.gridContainer}
        justify="space-evenly"
        alignContent="center"
      >
        <Grid item>
          <Typography variant="body2">
            body2...Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Recusandae at, et dicta veniam incidunt labore voluptatem ut est,
            officiis ipsum dolorum id neque itaque sunt vitae, nulla enim
            debitis molestias.
          </Typography>
          <Typography variant="caption">
            caption...Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Harum dolorum, corporis laborum, in aspernatur ratione unde expedita
            eum ipsam aliquid assumenda dolore minus quae, maiores illo vel
            repellendus iusto autem.
          </Typography>
          <Typography variant="subtitle1">
            subtitle1...Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Harum dolorum, corporis laborum, in aspernatur ratione unde expedita
            eum ipsam aliquid assumenda dolore minus quae, maiores illo vel
            repellendus iusto autem.
          </Typography>
          <Typography variant="subtitle2">
            subtitle2...Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Harum dolorum, corporis laborum, in aspernatur ratione unde expedita
            eum ipsam aliquid assumenda dolore minus quae, maiores illo vel
            repellendus iusto autem.
          </Typography>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Main;
