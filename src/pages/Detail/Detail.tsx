import React from "react";
import { Link } from "react-router-dom";
import ListItem from "../../components/ListItem";
import { add, edit } from "../../Store/listItemStore";
import { store } from "../../Store/store";
// import reduxStore from "../../Store/store";
import { rootType } from "../../Store/rootReducer";
import { useSelector } from "react-redux";

function Detail() {
  // const { store } = reduxStore();
  const state = useSelector((state: rootType) => {
    return state.items;
  });

  return (
    <div>
      <Link to="/">back</Link>

      {window.location.hash ? (
        <ListItem
          title={`Edit Todo ${window.location.hash}`}
          boxMessage="edit message"
          value={
            state.items[parseInt(window.location.hash.replace("#", "")) - 1]
          }
          action={(input: string) => {
            store.dispatch(
              edit({
                editIndex: parseInt(window.location.hash.replace("#", "")) - 1,
                editItem: input,
              })
            );
          }}
          btn="save"
        />
      ) : (
        <ListItem
          title="Add Todo"
          boxMessage="add new"
          value=""
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
