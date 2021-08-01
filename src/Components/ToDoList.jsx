import React, { useState, useEffect } from "react";
import ToDo from "./Item";
import AddItem from "./AddItem";
import styles from "./ToDoList.styles.scss";

export default function ToDoList() {
  const [toDos, setToDos] = useState(
    [
      "Example to do #1",
      "Example to do #2",
      "Example to do #3",
      "Example to do #4",
      "Example to do #5",
      "Example to do #6",
      "Example to do #7",
      "Example to do #8",
    ].map((item, index) => ({
      index,
      item,
    }))
  );

  function addToDo(element) {
    setToDos([...toDos, { index: toDos.length, item: element }]);
  }

  function removeToDo(index) {
    setToDos(
      toDos
        .filter((item) => {
          return index !== item.index;
        })
        .map((item, index) => ({ index, item: item.item }))
    );
  }

  return (
    <div className={styles.container}>
      <h2>To do list!</h2>
      <div className={styles.wrapper}>
        <div className={styles.toDoList}>
          {toDos.map((item, index) => {
            return (
              <ToDo
                key={index}
                index={index}
                stuff={item.item}
                deleteHandler={removeToDo}
              />
            );
          })}
        </div>
        <AddItem addHandler={addToDo} />
      </div>
      <h2 style={{ marginTop: "10px", width: "400px" }}>
        Current to do's: {toDos.length}
      </h2>
    </div>
  );
}
