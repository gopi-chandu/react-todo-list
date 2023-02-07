import { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {
  // let data = [
  //   { id: 1, name: "Call Draco", content: "LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem" },
  //   { id: 2, name: "Meet Emma ", content: 29 },
  //   { id: 3, name: "Call Cedric", content: 129 },
  // ];
  let data=[]
  const [items, setItems] = useState(data);
  const addEvent = (newData) => {
    setItems((prevState) => {
      return [newData, ...prevState];
    });
  };
  const deleteEvent = (itemId) => {
    setItems((prevState) => {
      return prevState.filter((item) => item.id !== itemId);
    });
  };
  return (
    <div className="flex items-center flex-col bg-red-200 h-screen">
      <div className=" w-1/2 md:w-1/4 bg-white m-2 p-3 rounded-md text-center text-2xl">To Do List</div>
      <ExpenseForm addElement={addEvent}></ExpenseForm>
      <ExpenseList items={items} deleteElement={deleteEvent} />
    </div>
  );
}

export default App;
