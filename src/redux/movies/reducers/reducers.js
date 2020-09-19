import {
  GET_MOVIES_START,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAIL,
  UPDATE_SEARCH_KEY,
  UPDATE_PAGE_NUMBER,
  UPDATE_TYPE,
  UPDATE_YEAR,
  GET_MOVIE_WITH_IMDB,
} from "../types";

const initialState = {
  movies: null,
  loading: false,
  searchText: "pokemon",
  pageNumber: 1,
  searchType: "movie",
  year: null,
  clickedMovie: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES_START:
      return {
        ...state,
        loading: true,
      };
    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.movies,
      };
    case GET_MOVIES_FAIL:
      return {
        ...state,
        loading: false,
      };
    case UPDATE_SEARCH_KEY:
      return {
        ...state,
        searchText: action.searchText,
      };

    case UPDATE_PAGE_NUMBER:
      return {
        ...state,
        pageNumber: action.pageNumber,
      };
    case UPDATE_TYPE:
      return {
        ...state,
        searchType: action.searchType,
      };

    case UPDATE_YEAR:
      return {
        ...state,
        year: action.year,
      };

    case GET_MOVIE_WITH_IMDB:
      return {
        ...state,
        clickedMovie: action.movie,
      };
    default:
      return {
        ...state,
      };
  }
};
