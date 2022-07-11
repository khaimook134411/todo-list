import React from "react";
import { Link } from "react-router-dom";
import ListItem from "../../components/ListItem";
import { add } from "../../Store/listItemStore";
import { store } from "../../Store/store";

function Detail() {
  return (
    <div>
      <Link to="/">back</Link>

      <ListItem
        title="Add Todo"
        boxMessage="add new"
        action={(input: string) => {
          store.dispatch(add({ item: input }));
        }}
        btn="submit"
      />

      <ListItem title="Edit Todo" boxMessage="edit message" btn="save" />
    </div>
  );
}

export default Detail;
