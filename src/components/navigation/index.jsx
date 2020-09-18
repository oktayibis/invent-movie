import React from "react";

import Search from "./searchMovie";
import "./nav.styles.scss";
function Index() {
  return (
    <div className="navBar">
      <Search placeholder="Search" />

      <hr />
    </div>
  );
}

export default Index;
