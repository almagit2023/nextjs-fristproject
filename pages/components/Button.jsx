import React from 'react'
import styles from './layout.module.css'

export default function Button(props) {
  return (
    <div>
       <button className={styles.btnStyle}>{props.text}</button>
    </div>
  )
}
