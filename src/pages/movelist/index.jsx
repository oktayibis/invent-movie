import { Container, Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MovieItem from "../../components/movie-item";
import {
  getMoviesbySearch,
  updatePageNumber,
} from "../../redux/movies/actions/actions";
import Pagination from "@material-ui/lab/Pagination";

import Navigation from "../../components/navigation/";

// Style

function Index() {
  const { movies, searchText, pageNumber, searchType } = useSelector(
    (state) => state.movies
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoviesbySearch(searchText, pageNumber, searchType));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber]);
  console.log(movies);
  return (
    <Container>
      <Navigation />
      <Container style={{ marginBottom: 20 }}>
        <Pagination
          variant="outlined"
          color="secondary"
          count={movies && Math.round(movies.totalResults / 10)}
          page={pageNumber}
          onChange={(e, v) => dispatch(updatePageNumber(v))}
        />
      </Container>
      <Grid container xl>
        {movies
          ? movies.Search.map((movie) => <MovieItem movie={movie} />)
          : "Loading"}
      </Grid>
    </Container>
  );
}

export default Index;
