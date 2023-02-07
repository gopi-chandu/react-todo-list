import React from "react";
import ExpenseListItem from "./ExpenseListItem";

const ExpenseList = (props) => {
  let content;
  let heading = <div className="m-b-2">No data found... add todo </div>;
  let dataExists = props.items.length > 0 ? true : false;
  if (dataExists) {
    heading = <div className="m-b-2">List</div>;
    content = props.items.map((item) => {
      return (
        <ExpenseListItem
          deleteEvent={props.deleteElement}
          key={item.id}
          id={item.id}
          name={item.name}
          content={item.content}
        />
      );
    });
  }
  return (
    <div className="rounded-md flex flex-col items-center w-1/2 bg-white p-2 m-2 ">
      <div className="m-b-2">{heading}</div>
      {dataExists && content}
    </div>
  );
};

export default ExpenseList;
