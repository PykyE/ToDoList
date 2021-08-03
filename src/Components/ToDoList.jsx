import React, { useState, useEffect } from "react";
import { TransitionGroup } from "react-transition-group";
import Fade from "react-reveal/Fade";
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
    ].map((text, index) => ({
      index,
      text,
    }))
  );

  const [id, setId] = useState(toDos.length);

  const groupProps = {
    appear: false,
    enter: true,
    exit: true,
  };

  useEffect(() => {
    console.log(toDos);
  }, [toDos]);

  function addToDo(text) {
    setId(id + 1);
    setToDos([...toDos, { index: id, text: text || "- -" }]);
  }

  function removeToDo(index) {
    console.log("index is: " + index);
    setToDos(
      toDos.filter((item) => {
        return index !== item.index;
      })
    );
  }

  return (
    <div className={styles.container}>
      <h2>To do list!</h2>
      <div className={styles.wrapper}>
        <div className={styles.toDoList}>
          <TransitionGroup {...groupProps}>
            {toDos.map((item) => {
              return (
                <Fade appear={true} key={item.index} collapse right>
                  <ToDo
                    index={item.index}
                    stuff={item.text}
                    deleteHandler={removeToDo}
                  />
                </Fade>
              );
            })}
          </TransitionGroup>
        </div>
        <AddItem addHandler={addToDo} />
      </div>
      <h2 style={{ marginTop: "10px", width: "400px" }}>
        Current to do's: {toDos.length}
      </h2>
    </div>
  );
}
