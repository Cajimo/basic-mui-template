import { Grid, Typography } from "@material-ui/core";
import React, { Fragment } from "react";
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
        <Grid
          item
          container
          direction="column"
          justify="space-evenly"
          alignContent="center"
          alignItems="center"
          xs
        >
          <Grid item>
            <Typography variant="h2" className={classes.title}>
              h2 Main Content Left
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align="justify"
              paragraph
              className={classes.text}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              quidem commodi optio repellat cum nobis, nulla magni voluptates
              non aspernatur ad at sunt tempora, perferendis a culpa eligendi
              sed perspiciatis.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs>
          <Typography variant="h5">h5 Main Content Right</Typography>
          <Typography variant="h6">h6 Main Content Right</Typography>
          <Typography variant="body1" className={classes.text}>
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
          <Typography variant="body2" className={classes.text}>
            body2...Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Recusandae at, et dicta veniam incidunt labore voluptatem ut est,
            officiis ipsum dolorum id neque itaque sunt vitae, nulla enim
            debitis molestias.
          </Typography>
          <Typography variant="caption" className={classes.text}>
            caption...Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Harum dolorum, corporis laborum, in aspernatur ratione unde expedita
            eum ipsam aliquid assumenda dolore minus quae, maiores illo vel
            repellendus iusto autem.
          </Typography>
          <Typography variant="subtitle1" className={classes.text}>
            subtitle1...Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Harum dolorum, corporis laborum, in aspernatur ratione unde expedita
            eum ipsam aliquid assumenda dolore minus quae, maiores illo vel
            repellendus iusto autem.
          </Typography>
          <Typography variant="subtitle2" className={classes.text}>
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
