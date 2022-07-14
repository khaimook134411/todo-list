import React from "react";
import { Link } from "react-router-dom";
import ListItem from "../../components/ListItem";
import { add, edit } from "../../Store/listItemStore";
import { store } from "../../Store/store";
import { rootType } from "../../Store/rootReducer";
import { useSelector } from "react-redux";

function Detail() {
  //observe reducer
  const state = useSelector((state: rootType) => {
    return state.items;
  });

  // call action add from store
  const _add = (input: string) => {
    store.dispatch(add({ item: input }));
  };

  //call action edit from store
  const _edit = (inputData: string) => {
    store.dispatch(
      edit({
        editIndex: parseInt(window.location.hash.replace("#", "")) - 1,
        editItem: inputData,
      })
    );
  };

  //call value from store
  const value =
    state.items[parseInt(window.location.hash.replace("#", "")) - 1];

  return (
    <div>
      <Link to="/">back</Link>

      {window.location.hash ? (
        <ListItem
          title={`Edit Todo ${window.location.hash}`}
          boxMessage="edit message"
          value={value}
          action={_edit}
          btn="save"
        />
      ) : (
        <ListItem
          title="Add Todo"
          boxMessage="add new"
          value=""
          action={_add}
          btn="submit"
        />
      )}
    </div>
  );
}

export default Detail;
