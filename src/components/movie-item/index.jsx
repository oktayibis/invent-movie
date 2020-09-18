import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles({
  root: {
    width: "350px",
  },
  media: {
    width: "100%",
    "&:hover": {
      transform: "scale(1.1)",
      transition: "1s",
    },
  },
  link: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },
});
function Index({ movie }) {
  const classes = useStyles();

  return (
    <Grid item xs>
      <Link className={classes.link} href={`detail/${movie.imdbID}`}>
        <Card className={classes.root}>
          <CardActionArea>
            <img
              className={classes.media}
              src={movie.Poster}
              alt={`${movie.Title} poster`}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="h5">
                {movie.Title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </Grid>
  );
}

export default Index;
