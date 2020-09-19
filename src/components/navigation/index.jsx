import { Link, Container } from "@material-ui/core";
import React from "react";

import Search from "./searchMovie";
function Index() {
  return (
    <div>
      <Container style={{ marginBottom: 10 }}>
        <Link href="/table">For Table View</Link>
        <Link style={{ marginLeft: 10 }} href="/">
          For Card View
        </Link>
      </Container>
      <Search />
    </div>
  );
}

export default Index;
