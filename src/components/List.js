// List management
import React from "react";
import classes from "./list.module.css";

const List = (props) => {
  console.log("props: ", props);
  let { birthdays, removeItem } = props;

  return (
    <section>
      {birthdays.map((birthday) => {
        const { id, name, age, image } = birthday;

        return (
          <div className={classes.main} key={id}>
            <article>
              <section className={classes.imagesection}>
                <img src={image} alt="" />
              </section>
              <section className={classes.headingsection}>
                <h4 className={classes.name}>{name}</h4>
                <h4 className={classes.age}>{age} years</h4>
              </section>
            </article>
            <button
              className={classes.removeBtn}
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
