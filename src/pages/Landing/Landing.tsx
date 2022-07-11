import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { del } from "../../Store/listItemStore";
import { rootType } from "../../Store/rootReducer";
import { store } from "../../Store/store";
import style from "./Landing.module.css";

function Landing() {
  const state = useSelector((state: rootType) => {
    return state.items;
  });
  return (
    <div className={style.container}>
      <h1>My Todo List</h1>
      {state.items.map((item, index) => {
        return (
          <div className={style.showItem}>
            <div className={style.item}>{item}</div>
            <div className={style.actionBtn}>
              <div className={style.edit}>edit</div>
              <div
                className={style.delete}
                onClick={() => {
                  store.dispatch(del({ index: index }));
                }}
              >
                delete
              </div>
            </div>
          </div>
        );
      })}

      <Link to="/detail">Add new</Link>
    </div>
  );
}

export default Landing;
