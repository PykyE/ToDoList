import React, { useState, useEffect } from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import styles from "./Item.styles.scss";
import { SvgIcon } from "@material-ui/core";

export default function Item(props) {
  const [selectedState, setSelectedState] = useState("");
  const states = ["InProgress", "Completed", "Delayed"];

  function handleChange(event) {
    setSelectedState(event.target.id);
  }

  return (
    <div
      className={
        styles[
          "toDo".toString() +
            (selectedState !== "" ? "--" : "").toString() +
            (selectedState !== "" ? selectedState : "").toString()
        ]
      }
    >
      <span>{props.stuff}</span>
      <div className={styles.toDo__Options}>
        <div className={styles.toDo__State}>
          {states.map((item, index, arr) => {
            return (
              <input
                key={index}
                type="checkbox"
                id={item}
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
