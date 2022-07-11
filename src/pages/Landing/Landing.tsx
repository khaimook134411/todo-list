import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { rootType } from "../../Store/rootReducer";
import style from "./Landing.module.css";

function Landing() {
  const state = useSelector((state: rootType) => {
    return state.items;
  });
  return (
    <div className={style.container}>
      <h1>My Todo List</h1>
      {state.items.map((item) => {
        return (
          <div className={style.showItem}>
            <div className={style.item}>{item}</div>
            <div className={style.actionBtn}>
              <div className={style.edit}>edit</div>
              <div className={style.delete}>delete</div>
            </div>
          </div>
        );
      })}

      <Link to="/detail">Add new</Link>
    </div>
  );
}

export default Landing;
