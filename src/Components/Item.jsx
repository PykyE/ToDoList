import React, { useState, useEffect } from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import styles from "./Item.styles.scss";
import { SvgIcon } from "@material-ui/core";

export default function Item(props) {
  const [selectedState, setSelectedState] = useState("");
  const [states, setStates] = useState(["In progress", "Completed", "Delayed"]);

  useEffect(() => {
    console.log(selectedState);
  }, [selectedState])

  return (
    <div className={styles.toDo}>
      <span>{props.stuff}</span>
      <div className={styles.toDo__Options}>
        <div className={styles.toDo__State}>
          {states.map((item, index, arr) => {
            return <input key={item} type="checkbox" id={index} onChange={(e)=>{
              setSelectedState(e.target.key);
            }}/>;
          })}
        </div>
        <SvgIcon
          className={styles.Svg}
          component={DeleteForeverIcon}
          onClick={() => {
            console.log("XD");
          }}
        ></SvgIcon>
      </div>
    </div>
  );
}
