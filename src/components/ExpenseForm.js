import React, { useState, useRef } from "react";
const validateData = (data) => {
  console.log(data)
  if (data.name.trim().length > 0 && data.content.trim().length > 0) return true;
  return false;
};
const ExpenseForm = (props) => {
  const nameInputRef = useRef("");
  const contentInputRef = useRef("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(contentInputRef.current.value);
    const content = contentInputRef.current.value;
    const name = nameInputRef.current.value;
    const data = {
      id: Math.random(),
      name: name,
      content: content,
    };
    if (validateData(data)) {
      props.addElement(data);
      // console.log(data);
    }
    contentInputRef.current.value = "";
    nameInputRef.current.value = "";
  };
  return (
    <div className="w-1/2 bg-white m-2 p-10 rounded-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Title
          </label>
          <input
            ref={nameInputRef}
            className="w-full border border-2 focus:border-red-200 focus:outline-none border-b-2 border-x-0 border-t-0 border-red-100 "
            type="text"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Content
          </label>
          <textarea
            ref={contentInputRef}
            className="w-full border border-2 focus:border-red-200 focus:outline-none border-b-2 border-x-0 border-t-0 border-red-100 "
            type="text"
          />
        </div>
        <div>
          <div className="w-fit border border-red-200 p-2 bg-red-200 rounded-md">
            <button className="px-2 m-0" type="submit">
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
