import { Container, Grid, ProgressBar } from "@material-ui/core";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MovieItem from "../../components/movie-item";
import {
  getMoviesbySearch,
  updatePageNumber,
} from "../../redux/movies/actions/actions";
import Pagination from "@material-ui/lab/Pagination";

// Style

import "./list.styles.scss";

function Index() {
  const { movies, loading, searchText, pageNumber, searchType } = useSelector(
    (state) => state.movies
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const fetch = async () => {
      dispatch(await getMoviesbySearch(searchText, pageNumber, searchType));
    };
    fetch();
  }, [pageNumber]);
  console.log(movies);
  return (
    <Container>
      <Container style={{ marginBottom: 20 }}>
        <Pagination
          variant="outlined"
          color="secondary"
          count={movies && Math.round(movies.totalResults / 10)}
          page={pageNumber}
          onChange={(e, v) => dispatch(updatePageNumber(v))}
        />
      </Container>
      <Grid container spacing={2}>
        {movies
          ? movies.Search.map((movie) => <MovieItem movie={movie} />)
          : "Loading"}
      </Grid>
    </Container>
  );
}

export default Index;

// <div>
// <div>Movie list</div>
// <Container className="listContainer">
//   {movies
//     ? movies.Search.map((item) => <MovieItem movie={item} />)
//     : "loading"}
// </Container>
// </div>
