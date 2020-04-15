import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";

export default props => {
  return (
    <>
      <Router>
        <div className="App">
          <Header title={props.title} />
          <br />
          <Menu />
          {props.children}
          <Footer />
        </div>
      </Router>
    </>
  );
};
