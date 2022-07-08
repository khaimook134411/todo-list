import React, { useState } from "react";
import { Link } from "react-router-dom";
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
          onChange={(event) => setInputData(event.target.value)}
        />
      </div>
      <p className={style.submitBtn} onClick={() => {}}>
        Submit
      </p>
    </div>
  );
}

export default Detail;
