import axios from "axios";
import {
  GET_MOVIES_FAIL,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_START,
  UPDATE_PAGE_NUMBER,
  UPDATE_SEARCH_KEY,
  UPDATE_TYPE,
  UPDATE_YEAR,
  GET_MOVIE_WITH_IMDB,
} from "../types";
const API_BASE = "http://www.omdbapi.com/?";
const API_KEY = "apikey=7c46194e";

// API
export const getMoviesbySearch = (searchKey, page, searchType, year) => {
  let API_URL = "";
  if (year) {
    API_URL = `${API_BASE}${API_KEY}&s=${searchKey}&type=${searchType}&y=${year}&page=${page}`;
  } else {
    API_URL = `${API_BASE}${API_KEY}&s=${searchKey}&type=${searchType}&page=${page}`;
  }
  return async (dispatch) => {
    dispatch({ type: GET_MOVIES_START });
    try {
      let response = await axios.get(API_URL);
      if (response.data.Response !== "False") {
        dispatch({ type: GET_MOVIES_SUCCESS, movies: response.data });
      } else {
        dispatch({ type: GET_MOVIES_FAIL });
        alert(response.data.Error);
      }
    } catch (error) {
      dispatch({ type: GET_MOVIES_FAIL });
      alert("Error");
    }
  };
};

export const getMoviesByYear = (year) => {
  // This api request does not work !!!
  const API_BY_YEAR = `${API_BASE}${API_KEY}&?y=${year}`;
  console.log(API_BY_YEAR);
  return async (dispatch) => {
    dispatch({ type: GET_MOVIES_START });
    try {
      const response = await axios.get(API_BY_YEAR);
      if (response.data.Response !== "False") {
        dispatch({ type: GET_MOVIES_SUCCESS, movies: response.data });
      } else {
        dispatch({ type: GET_MOVIES_FAIL });
        alert(response.data.Error);
      }
    } catch (error) {
      dispatch({ type: GET_MOVIES_FAIL });
      alert(error.message);
    }
  };
};
// LOCAL STATE UPDATES

export const updatePageNumber = (pageNumber) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_PAGE_NUMBER, pageNumber });
  };
};

export const updateSearchText = (searchText) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_SEARCH_KEY, searchText });
  };
};

export const updateType = (searchType) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_TYPE, searchType });
  };
};

export const updateYear = (year) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_YEAR, year });
  };
};

export const getMovieWithImdbAction = (imdbId) => {
  const API_KEY_IMDB = `${API_BASE}${API_KEY}&i=${imdbId}`;
  return async (dispatch) => {
    try {
      const response = await axios.get(API_KEY_IMDB);
      dispatch({ type: GET_MOVIE_WITH_IMDB, movie: response.data });
    } catch (error) {
      alert(error.message);
    }
  };
};
