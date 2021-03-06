import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppRouter from "./AppRouter";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import reduxStore from "./redux/store";

const AppWithRedux = () => {
  return (
    <Provider store={reduxStore}>
      <AppRouter />
    </Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <AppWithRedux />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
