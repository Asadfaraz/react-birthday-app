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
    <main>
      <section className="container">
        <h3>{birthdays.length} birthdays today</h3>
        <List removeItem={removeItem} birthdays={birthdays}></List>

        <button
          className="clearBtn"
          type="button"
          onClick={() => {
            setBirthdays([]);
          }}
        >
          Clear All
        </button>
      </section>
    </main>
  );
}

export default App;
