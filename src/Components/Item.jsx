import React, { useState, useRef, useEffect } from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import styles from "./Item.styles.scss";
import { SvgIcon } from "@material-ui/core";

export default function Item(props) {
  const [selectedState, setSelectedState] = useState("");
  const states = ["Completed", "InProgress", "Delayed"];
  const InProgressRef = useRef();
  const CompletedRef = useRef();
  const DelayedRef = useRef();

  function handleChange(event) {
    setSelectedState(event.target.checked ? event.target.id : "");
  }

  useEffect(() => {
    switch (selectedState) {
      case "InProgress":
        CompletedRef.current.checked = false;
        DelayedRef.current.checked = false;
        break;
      case "Completed":
        InProgressRef.current.checked = false;
        DelayedRef.current.checked = false;
        break;
      case "Delayed":
        InProgressRef.current.checked = false;
        CompletedRef.current.checked = false;
        break;
      default:
        InProgressRef.current.checked = false;
        CompletedRef.current.checked = false;
        DelayedRef.current.checked = false;
    }
  }, [selectedState]);

  return (
    <div
      className={
        styles[
          "toDo" +
            (selectedState !== "" ? "--" : "") +
            (selectedState !== "" ? selectedState : "")
        ]
      }
    >
      <span>{props.stuff}</span>
      <div className={styles.toDo__Options}>
        <div className={styles.toDo__State}>
          {states.map((item, index) => {
            return (
              <input
                key={index}
                type="checkbox"
                id={item}
                ref={
                  item === "InProgress"
                    ? InProgressRef
                    : item === "Completed"
                    ? CompletedRef
                    : DelayedRef
                }
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            );
          })}
        </div>
        <SvgIcon
          className={styles.Svg}
          component={DeleteForeverIcon}
          onClick={() => {
            props.deleteHandler(props.index);
          }}
        ></SvgIcon>
      </div>
    </div>
  );
}
