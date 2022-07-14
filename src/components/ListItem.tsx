import React, { useState } from "react";
import style from "./ListItem.module.css";
import { Link } from "react-router-dom";

export type Props = {
  value: string;
  title: string;
  boxMessage: string;
  action: (inputData: string) => void;
  btn: string;
};

function ListItem(props: Props) {
  const [inputData, setInputData] = useState(props.value);
  const _action = () => props.action(inputData);
  const _onChange = (event: any) => setInputData(event.target.value);
  return (
    <div className={style.container}>
      <h1>{props.title}</h1>
      <div className={style.boxMessage}>
        Message:{" "}
        <input
          type="text"
          placeholder={props.boxMessage}
          value={inputData}
          onChange={(e) => _onChange(e)}
        />
      </div>
      <Link to="/">
        <p className={style.submitBtn} onClick={_action}>
          {props.btn}
        </p>
      </Link>
    </div>
  );
}

export default ListItem;
