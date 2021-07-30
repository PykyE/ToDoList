import React, { useState, useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";
import styles from "./AddItem.styles.scss";

export default function AddItem(props) {
  const [newToDo, setNewToDo] = useState();
  const inputRef = useRef();

  function handleChange(event) {
    setNewToDo(event.target.value);
  }

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className={styles.addNewToDo}>
      <input
        ref={inputRef}
        type="text"
        name="newStuff"
        id="newStuff"
        onChange={handleChange}
      />
      <Button
        variant="success"
        onClick={function trigger() {
          props.addHandler(newToDo);
          inputRef.current.value = "";
          setNewToDo("");
        }}
      >
        Add new item
      </Button>
    </div>
  );
}
