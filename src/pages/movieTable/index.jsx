import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getMoviesbySearch,
  updatePageNumber,
} from "../../redux/movies/actions/actions";
import { Container, Link } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Pagination from "@material-ui/lab/Pagination";
import Navigation from "../../components/navigation/";

function Index() {
  const { movies, searchText, pageNumber, searchType } = useSelector(
    (state) => state.movies
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const fetch = async () => {
      dispatch(await getMoviesbySearch(searchText, pageNumber, searchType));
    };
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber]);
  return (
    <Container>
      <Navigation />
      <Paper elevation={3}>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Movie Name</TableCell>
                <TableCell align="right">Release Year</TableCell>
                <TableCell align="right">IMDB ID</TableCell>
                <TableCell align="right">More</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {movies &&
                movies.Search.map((movie) => (
                  <TableRow key={movie.Title}>
                    <TableCell component="th" scope="row">
                      {movie.Title}
                    </TableCell>
                    <TableCell align="right">{movie.Year}</TableCell>
                    <TableCell align="right">{movie.imdbID}</TableCell>
                    <TableCell
                      style={{ textTransform: "capitalize" }}
                      align="right"
                    >
                      <Link href={`detail/${movie.imdbID}`}> More Info </Link>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          <Container>
            <Pagination
              style={{ margin: 10 }}
              variant="outlined"
              color="secondary"
              count={movies && Math.round(movies.totalResults / 10)}
              page={pageNumber}
              onChange={(e, v) => dispatch(updatePageNumber(v))}
            />
          </Container>
        </TableContainer>
      </Paper>
    </Container>
  );
}

export default Index;
