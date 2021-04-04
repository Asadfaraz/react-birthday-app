// List management
import React from "react";

const List = (props) => {
  console.log("props: ", props);
  let { birthdays, removeItem } = props;

  return (
    <section>
      {birthdays.map((birthday) => {
        const { id, name, age, image } = birthday;

        return (
          <div key={id}>
            <h4>{name}</h4>
            <h4>{age}</h4>
            <img src={image} alt="" width="100px" />
            <button
              type="button"
              onClick={() => {
                removeItem(id);
              }}
            >
              Remove Item
            </button>
          </div>
        );
      })}
    </section>
  );
};

export default List;
