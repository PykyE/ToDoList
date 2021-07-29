import React from 'react'
import Button from 'react-bootstrap/Button'
import styles from './AddItem.styles.scss'

export default function AddItem() {
  return (
    <div className={styles.addNewToDo}>
      <input type="text" name="" id="" />
      <Button variant="success">Add new item</Button>
    </div>
  )
}
