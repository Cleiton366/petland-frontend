import styles from './ButtonR.module.css'
import React from 'react'

const ButtonR = props => {
  return (
    <button type="submit" className={styles.button}>
      {props.value}
    </button>
  )
}
export default ButtonR
