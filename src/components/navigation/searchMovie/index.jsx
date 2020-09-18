import React from "react";
import Radio from "@material-ui/core/Radio";
import { useDispatch, useSelector } from "react-redux";

import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";
import { Button, Container, Grid, Paper } from "@material-ui/core";
import {
  getMoviesbySearch,
  updateSearchText,
  updateType,
  updateYear,
  getMoviesByYear,
} from "../../../redux/movies/actions/actions";

function Index(props) {
  const dispatch = useDispatch();
  const { searchText, pageNumber, searchType, year } = useSelector(
    (state) => state.movies
  );

  const handleSearch = () => {
    dispatch(getMoviesbySearch(searchText, pageNumber, searchType, year));
  };
  const handleYear = () => {
    dispatch(getMoviesByYear(year));
  };

  return (
    <Paper
      style={{ padding: 30, backgroundColor: "#fcfaf2", marginBottom: 30 }}
      elevation={3}
    >
      <Grid container direction="row" spacing={1} justify="space-between">
        <Grid item lg>
          <Container style={{ margin: 10 }}>
            <TextField
              onChange={(e) => dispatch(updateSearchText(e.target.value))}
              value={searchText}
              id="outlined-search"
              label="Search"
              variant="outlined"
            />
          </Container>
          <Container style={{ margin: 10 }}>
            <TextField
              id="outlined-release"
              label="Release Year"
              variant="outlined"
              value={year}
              type="number"
              onChange={(e) => dispatch(updateYear(e.target.value))}
            />
            <Container style={{ marginTop: 10 }}>
              <Button disabled variant="contained" onClick={handleYear}>
                Filter by Year
              </Button>
            </Container>
          </Container>
        </Grid>
        <Grid item lg>
          <FormControl className="types" component="fieldset">
            <FormLabel component="legend">
              Please choose type of content
            </FormLabel>
            <RadioGroup
              name="types"
              value={searchType}
              onChange={(e) => dispatch(updateType(e.target.value))}
            >
              <FormControlLabel
                value="movie"
                control={<Radio />}
                label="In Movies"
              />
              <FormControlLabel
                value="series"
                control={<Radio />}
                label="In Series"
              />
              <FormControlLabel
                value="episode"
                control={<Radio />}
                label="In Episode"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item style={{ marginTop: 50 }}>
          <Button
            size="large"
            color="primary"
            variant="contained"
            onClick={handleSearch}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Index;
