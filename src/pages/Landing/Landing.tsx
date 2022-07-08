import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { rootType } from "../../Store/rootReducer";
import style from "./Landing.module.css";

function Landing() {
  const state = useSelector((state: rootType) => {
    return state.item;
  });
  return (
    <div className={style.container}>
      <h1>My Todo List</h1>
      <p>{state.item}</p>
      <Link to="/detail">Add new</Link>
    </div>
  );
}

export default Landing;
