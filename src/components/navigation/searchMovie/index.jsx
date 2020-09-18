import React, { useEffect, useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import {
  getMoviesbySearch,
  updatePageNumber,
  updateSearchText,
  updateType,
  updateYear
} from "../../../redux/movies/actions/actions";

import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import "./styles.scss";

function Index(props) {
  const dispatch = useDispatch();
  const { searchText, pageNumber, searchType, year } = useSelector(
    (state) => state.movies
  );

  const handleSearch = () => {
    dispatch(getMoviesbySearch(searchText, pageNumber, searchType));
  };

  return (
    <div className="searchContainer">
      <div className="searchArea">
        <div className="inputContainer">
          <TextField
            onChange={(e) => dispatch(updateSearchText(e.target.value))}
            id="outlined-search"
            label="Search"
            variant="outlined"
            style={{ marginTop: "10%" }}
          />
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
        </div>
        <Button size="large" variant="contained" onClick={handleSearch}>
          Search
        </Button>
      </div>
      <div className="yearContainer">
        <TextField
          id="outlined-release"
          label="Release Year"
          variant="outlined"
          value={year}
          type="number"
          onChange={(e) => dispatch(updateYear(e.target.value))}
        />
      </div>
    </div>
  );
}

export default Index;
