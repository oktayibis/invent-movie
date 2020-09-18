import axios from "axios";
import {
  GET_MOVIES_FAIL,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_START,
  UPDATE_PAGE_NUMBER,
  UPDATE_SEARCH_KEY,
  UPDATE_TYPE,
  UPDATE_YEAR,
} from "../types";
const API_BASE = "http://www.omdbapi.com/?";
const API_KEY = "apikey=7c46194e";

// API
export const getMoviesbySearch = (searchKey, page, searchType) => {
  const API_URL = `${API_BASE}${API_KEY}&s=${searchKey}&type=${searchType}&page=${page}`;
  console.log("Ap:", API_URL);
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
