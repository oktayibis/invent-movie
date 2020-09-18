import { Card, Container, Grid, Paper } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  media: {
    width: "250px",
    height: "100%",
  },
}));
function Index({ movie }) {
  const classes = useStyles();
  return (
    <Grid item xs>
      <Paper>
        <Card className={classes.root}>
          <CardActionArea>
            <img src={movie.Poster} alt={`${movie.Title} poster`} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {movie.Title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Paper>
    </Grid>
  );
}

export default Index;
