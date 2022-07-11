import React from "react";
import { Link } from "react-router-dom";
import ListItem from "../../components/ListItem";
import { add } from "../../Store/listItemStore";
import { store } from "../../Store/store";

function Detail() {
  console.log(window.location.href);

  return (
    <div>
      <Link to="/">back</Link>

      {window.location.hash ? (
        <ListItem
          title={`Edit Todo ${window.location.hash}`}
          boxMessage="edit message"
          btn="save"
        />
      ) : (
        <ListItem
          title="Add Todo"
          boxMessage="add new"
          action={(input: string) => {
            store.dispatch(add({ item: input }));
          }}
          btn="submit"
        />
      )}
    </div>
  );
}

export default Detail;
