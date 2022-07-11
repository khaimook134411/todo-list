import React, { useState } from "react";
import style from "./ListItem.module.css";
import { Link } from "react-router-dom";

function ListItem(props: any) {
  const [inputData, setInputData] = useState(props.value);
  return (
    <div className={style.container}>
      <h1>{props.title}</h1>
      <div className={style.boxMessage}>
        Message:{" "}
        <input
          type="text"
          placeholder={props.boxMessage}
          value={inputData}
          onChange={(event) => setInputData(event.target.value)}
        />
      </div>
      <Link to="/">
        <p
          className={style.submitBtn}
          onClick={() => {
            props.action(inputData);
          }}
        >
          {props.btn}
        </p>
      </Link>
    </div>
  );
}

export default ListItem;
