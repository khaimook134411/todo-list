import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { del } from "../../Store/listItemStore";
import { rootType } from "../../Store/rootReducer";
import { store } from "../../Store/store";
import style from "./Landing.module.css";

function Landing() {
  //observe reducer
  const state = useSelector((state: rootType) => {
    return state.items;
  });
  //call action delete from store
  const _delete = (index: number) => {
    store.dispatch(del({ index: index }));
  };
  return (
    <div className={style.container}>
      <h1>My Todo List</h1>
      {state.items.map((item, index) => {
        return (
          <div className={style.showItem}>
            <div className={style.item}>{item}</div>
            <div className={style.actionBtn}>
              <Link to={`/detail/#${index + 1}`}>
                <div className={style.edit}>edit</div>
              </Link>
              <div className={style.delete} onClick={() => _delete(index)}>
                delete
              </div>
            </div>
          </div>
        );
      })}

      <Link to="/detail" className={style.submitBtn}>
        Add new
      </Link>
    </div>
  );
}

export default Landing;
