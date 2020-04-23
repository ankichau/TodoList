import React from "react";
import { MdDelete } from "react-icons/md";

export default function ListItem(props) {
  console.log(props.items);
  const listItems = props.items.map((item) => {
    return (
      <div>
        {/* <input
          type="text"
          value={item.text}
          id={item.key}
          onChange={(e) => props.setUpdate(e.target.value, item.key)}
        /> */}
        <div className="lists">
          <span className="list">{item.text}</span>
          <MdDelete
            className="delete"
            onClick={() => props.deleteitem(item.key)}
          />
        </div>
      </div>
    );
  });
  return <div style={{ color: "white" }}>{listItems}</div>;
}
