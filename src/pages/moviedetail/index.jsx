import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMovieWithImdbAction } from "../../redux/movies/actions/actions";
import { Container, Grid, Link, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Alert from "@material-ui/lab/Alert";

const useStyle = makeStyles({
  alertContainer: {
    margin: "10px auto",
  },
  textContainer: {
    marginTop: 30,
    backgroundColor: "#efebe9",
    color: "#725b53",
    borderRadius: 10,
    padding: 20,
  },
  goBack: {
    padding: 5,
    borderRadius: 5,
    marginTop: 20,
    backgroundColor: "#efebe9",
    width: "fit-content",
    "&:hover": {
      textDecoration: "none",
      backgroundColor: "#d7ccc8",
      color: "white",
    },
  },
  link: {
    textDecoration: "none",
    color: "#a69b97",
    fontSize: 20,
    "&:hover": {
      textDecoration: "none",
      backgroundColor: "inherit",
      color: "inherit",
    },
  },
});

function Index() {
  const { movieId } = useParams();
  const { clickedMovie } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const classes = useStyle();

  useEffect(() => {
    dispatch(getMovieWithImdbAction(movieId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (clickedMovie) {
    return (
      <Container>
        <Grid container spacing={2}>
          <Grid item xs>
            <img src={clickedMovie.Poster} alt="" />
          </Grid>
          <Grid item xl>
            <Typography variant="h3">{clickedMovie.Title}</Typography>
            <Alert className={classes.alertContainer} icon={false}>
              <Typography>Runtime: {clickedMovie.Runtime}</Typography>
            </Alert>
            <Alert
              className={classes.alertContainer}
              variant="filled"
              icon={false}
            >
              <Typography>Imdb Rating: {clickedMovie.imdbRating}</Typography>
            </Alert>
            <Alert
              className={classes.alertContainer}
              variant="filled"
              severity="warning"
              icon={false}
            >
              <Typography>Genre: {clickedMovie.Genre}</Typography>
            </Alert>
            <Alert
              className={classes.alertContainer}
              severity="warning"
              icon={false}
            >
              <Typography>Director: {clickedMovie.Director}</Typography>
            </Alert>
            <Alert
              className={classes.alertContainer}
              severity="info"
              icon={false}
            >
              <Typography>Actors: {clickedMovie.Actors}</Typography>
            </Alert>
          </Grid>
        </Grid>
        <Container className={classes.textContainer}>
          <Typography variant="body1">{clickedMovie.Plot}</Typography>
        </Container>
        <Container className={classes.goBack}>
          <Link className={classes.link} href="/">
            Go back Cards
          </Link>
        </Container>
        <Container className={classes.goBack}>
          <Link className={classes.link} href="/table">
            Go back Table
          </Link>
        </Container>
      </Container>
    );
  } else return "Loading";
}

export default Index;
