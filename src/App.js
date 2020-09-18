import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Router from "./pages/Router";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import Reducers from "./redux/movies/reducers";
import { composeWithDevTools } from "redux-devtools-extension";

function App() {
  const store = createStore(
    Reducers,
    composeWithDevTools(applyMiddleware(ReduxThunk))
  );
  return (
    <div className="App">
      <Provider store={store}>
        <Router />
      </Provider>
    </div>
  );
}

export default App;
