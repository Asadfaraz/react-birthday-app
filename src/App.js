import React from "react";
import "./App.css";
import { data } from "./components/data";
import List from "./components/List";

function App() {
  // useState Hook for managing data
  const [birthdays, setBirthdays] = React.useState(data);
  // function for removing an item
  const removeItem = (id) => {
    let newList = birthdays.filter((birthday) => {
      return birthday.id != id;
    });
    setBirthdays(newList);
  };

  return (
    <div className="App">
      <h1>{birthdays.length} birthdays today</h1>
      <List removeItem={removeItem} birthdays={birthdays}></List>

      <button
        type="button"
        onClick={() => {
          setBirthdays([]);
        }}
      >
        Clear All
      </button>
    </div>
  );
}

export default App;
