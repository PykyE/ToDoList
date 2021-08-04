import React, { useState, useEffect } from "react";
import { TransitionGroup } from "react-transition-group";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";
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

  function addToDo(text) {
    setId(id + 1);
    setToDos([...toDos, { index: id, text: text || "- -" }]);
  }

  function removeToDo(index) {
    setToDos(
      toDos.filter((item) => {
        return index !== item.index;
      })
    );
  }

  return (
    <div className={styles.container}>
      <Slide right>
        <h2>To do list!</h2>
      </Slide>
      <Zoom>
        <div className={styles.wrapper}>
          <div className={styles.toDoList}>
            <TransitionGroup {...groupProps}>
              {toDos.map((item) => {
                return (
                  <Fade unmountOnExit appear={true} key={item.index} collapse left opposite>
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
      </Zoom>
      <Slide left>
        <h2 style={{ marginTop: "10px", width: "400px" }}>
          Current to do's: {toDos.length}
        </h2>
      </Slide>
    </div>
  );
}
