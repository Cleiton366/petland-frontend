import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Container from '../Container2'
import styles from './Chat.module.css'
import cat1 from '../../assets/Cat.jpg'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

function Chat() {
  const { id } = useParams()
  const [pet, setPet] = useState()

  return (
    <Container>
      <div className={styles.container}>
        <div className={styles.petI}>
          <img src={cat1} alt="Cat 1" width="30%" />
          <div className={styles.name}>Name: </div>
          <div className={styles.city}>City: </div>
          <div className={styles.age}>Years: </div>
          <div className={styles.medical}>Medical Condition:</div>
          <div className={styles.donator}></div>
        </div>
        <div className={styles.chat}>
          <div className={styles.nameD}>Donator: Joao</div>

          <textarea name={styles.text} id="" cols="15  " rows="1">
            Menssage
          </textarea>
        </div>
      </div>
    </Container>
  )
}

export default Chat
