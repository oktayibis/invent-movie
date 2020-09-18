import { combineReducers } from "redux";
import MoviesReducers from "./reducers";

export default combineReducers({
  movies: MoviesReducers,
});
