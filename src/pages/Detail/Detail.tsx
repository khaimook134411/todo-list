import React, { useState } from "react";
import { Link } from "react-router-dom";
import { add } from "../../Store/listItemStore";
import { store } from "../../Store/store";
import style from "./Detail.module.css";

function Detail() {
  const [inputData, setInputData] = useState("");

  return (
    <div className={style.container}>
      <Link to="/">back</Link>
      <h1>Add Todo</h1>
      <div className={style.boxMessage}>
        Message:{" "}
        <input
          type="text"
          placeholder="add new todo list"
          value={inputData}
          onChange={(event) => setInputData(event.target.value)}
        />
      </div>
      <Link to="/">
        <p
          className={style.submitBtn}
          onClick={() => {
            store.dispatch(add({ item: inputData }));
          }}
        >
          Submit
        </p>
      </Link>
    </div>
  );
}

export default Detail;
