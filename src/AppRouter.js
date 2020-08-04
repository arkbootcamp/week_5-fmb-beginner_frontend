import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Komponen kelas, stateful, class => Memiliki State dan Props
//Komponen fungsi, stateless, functional => Memiliki Props

import Home from "./pages/Home";
import FromHTML from "./pages/FromHTML";

const AppRouter = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/html" component={FromHTML} />
    </Router>
  );
};

// /
// /html

export default AppRouter;
