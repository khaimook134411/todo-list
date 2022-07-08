import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <h1>My Todo List</h1>
      <Link to="/detail">Add new</Link>
    </div>
  );
}

export default Landing;
