import styles from './ButtonG.module.css'
import React from 'react'

const ButtonG = props => {
  return (
    <button type="submit" className={styles.button}>
      {props.value}
    </button>
  )
}
export default ButtonG
