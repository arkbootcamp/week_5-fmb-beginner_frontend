import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Komponen kelas, stateful, class => Memiliki State dan Props
//Komponen fungsi, stateless, functional => Memiliki Props

import Home from "./pages/Home";
import FromHTML from "./pages/FromHTML";
import Login from "./pages/Login";
import NameAndCounter from "./pages/NameAndCounter";
import PrivateRoute from "./components/PrivateRoute";

const AppRouter = () => {
  return (
    <Router>
      <PrivateRoute path="/private" exact>
        <Home />
      </PrivateRoute>
      {/* <Route path="/" exact component={Home} /> */}
      <Route path="/html" component={FromHTML} />
      <Route path="/login" component={Login} />
      <Route path="/" exact component={NameAndCounter} />
    </Router>
  );
};

// /
// /html

export default AppRouter;
