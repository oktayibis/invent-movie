import React from "react";
import { useParams } from "react-router-dom";
function Index() {
  const { movieId } = useParams();
return <div>Movie detail {movieId}</div>;
}

export default Index;
