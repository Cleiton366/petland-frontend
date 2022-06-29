import React, { useEffect, useState } from 'react'
//import axios from 'axios'
//import ReactLoading from 'react-loading'
import axios from 'axios'
import Container from '../Container2'
import styles from './Adopt.module.css'
import Line from '../../assets/Line1.png'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

function Adopt() {
  const { id } = useParams()
  const [pet, setPet] = useState()
  let [userId, setUserId] = useState()

  useEffect(() => {
    // eslint-disable-next-line no-extra-semi
    ;(async () => {
      const url = `http://localhost:4000/pet/${id}`
      try {
        const { data, status } = await axios.get(url, {
          withCredentials: true
        })
        setInterval(() => {}, 30000)
        if (data.petid) {
          setPet(data)
          setUserId(window.localStorage.getItem('userId'))
          console.log(userId)
        }
      } catch (err) {
        console.log(err.message)
      }
    })()
  }, [pet])

  async function handleAdoption() {
    const url = 'http://localhost:4000/donationrequest/new'
    const { data } = await axios.post(url, {
      donatorId: pet.donatorid,
      interrestedDoneeId: userId,
      petId: pet.petId
    })
    console.log(data)
  }

  async function deletePet() {
    const navigate = useNavigate()
    const url = 'http://localhost:4000/pet/delete'
    const { data } = await axios.delete(url, {
      data: {
        petId: pet.petid
      }
    })
    return navigate(-1)
  }

  return (
    <div>
      {pet ? (
        <Container>
          <div className={styles.photo}>
            <img
              className={`img-fluid align-middle mx-auto`}
              src={pet.petphoto || 'https://i.imgur.com/gJmbboJ.png'}
              alt="Logo do gato"
              width="30%"
            />
          </div>
          <div className={styles.container}>
            <div className={styles.info}>
              <div className={styles.name}>Name: {pet.petname}</div>
              <div className={styles.city}>City: {pet.city}</div>
              <div className={styles.age}>Years: {pet.age}</div>
              <div className={styles.medical}>
                Medical Condition: {pet.medicalcondition}
              </div>
            </div>
            <div className={styles.imgLine}>
              <img src={Line} alt="Linha" width="50%" />
            </div>
            {pet.donatorid != userId ? (
              <div className={styles.containerDonator}>
                <div className={styles.donator}>
                  Donator:
                  <div className={styles.donatorInfo}>
                    <div className={styles.avatarurl}> {}</div>
                    <div className={styles.username}></div>
                  </div>
                </div>
                <div className={styles.buttonG1}>
                  <button onClick={handleAdoption}>Apply for adoption</button>
                </div>
              </div>
            ) : (
              <div className={styles.editPet}>
                <div className={styles.ButtonR}>
                  <button onClick={deletePet}> Delete</button>
                </div>
              </div>
            )}
          </div>
        </Container>
      ) : (
        <div />
      )}
    </div>
  )
}
export default Adopt
