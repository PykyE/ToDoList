import React, { useState } from "react";
import ToDo from "./Item";
import AddItem from './AddItem'
import styles from "./ToDoList.styles.scss";

export default function ToDoList() {
  const [toDos, setToDos] = useState([
    "Example to do #1",
    "Example to do #2",
    "Example to do #3"
  ]);
  return (
    <div className={styles.container}>
      <h2>To do list!</h2>
      <div className={styles.wrapper}>
        <div className={styles.toDoList}>
          {toDos.map((item, index, arr) => {
            return <ToDo key={index.toString()} stuff={item} />;
          })}
        </div>
        <AddItem/>
      </div>
    </div>
  );
}
