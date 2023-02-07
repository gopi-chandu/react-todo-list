import React from "react";

const ExpenseListItem = (props) => {
  const deleteHandler = () => {
    props.deleteEvent(props.id);
  };
  return (
    <div className="text-xs md:text-xl bg-blue-200 mb-1 rounded-md w-full flex flex-row items-stretch justify-between  p-2">
      <div>{props.name}</div>
      <div className="truncate">
        <p className="truncate"> {props.content}</p>
      </div>
      <div
        onClick={deleteHandler}
        className="bg-white p-1 h-6 w-4 rounded-lg text-center text-xs"
      >
        X
      </div>
    </div>
  );
};

export default ExpenseListItem;
