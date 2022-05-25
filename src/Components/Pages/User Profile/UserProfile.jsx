import styles from './UserProfile.module.css'
import Container from '../Container/Container'
import {useState, React} from 'react'
import Foto from '../../assets/FotoPerfil.png'  
import Cat from '../../assets/Cat.jpg'

const UserProfile = () => {
  const [user, setUser] = useState(null)
  const [isLoading, setLoading] = useState(true);

  //this is only for testing getting user information from backend
  async function userInfo() {
    const res = await fetch ("http://localhost:4000/user-info", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true
      }
    });

    setUser(await res.json())
    setLoading(false)
  }

  async function donatedPets() {
    const res = await fetch ("http://localhost:4000/donatedPets", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
        userid: user.id
      }
    });
    console.log(await res)
  }

  async function ownedPets() {
    const res = await fetch ("http://localhost:4000/userPets", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
        userid: user.id
      }
    });
    console.log(await res.json)
  }
  
  userInfo().then(() => {
    console.log(user)
  })

  donatedPets().then(() => {

  })

  ownedPets().then(() => {

  })
  
  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <Container username={user.username} avatar={user.avatarurl}>
      <div className={styles.userInfo}>
        <div className={styles.userImage}>
          <img src={user.avatarurl}></img>
          <h3>{user.username}</h3>
        </div>
        <div className={styles.userInfos}>
          <h4>37 Years</h4>
          <h4>Utah, Richfield</h4>
          <h4>Pets Doneted: 1</h4>
          <h4>Pets Owned: 3</h4>
          <h4>555-55554</h4>
        </div>
      </div>
      <div className={styles.pets}>
        <div className={styles.petsOwned}>
          <h3>Pets Owned</h3>
          <div className={styles.pet}>
            <img src={Cat}></img>
            <div className={styles.petInfo}>
              <h3>Cat</h3>
              <h3>6 Mounths</h3>
            </div>
          </div>
          <div className={styles.pet}>
            <img src={Cat}></img>
            <div className={styles.petInfo}>
              <h3>Cat</h3>
              <h3>6 Mounths</h3>
            </div>
          </div>
          <div className={styles.pet}>
            <img src={Cat}></img>
            <div className={styles.petInfo}>
              <h3>Cat</h3>
              <h3>6 Mounths</h3>
            </div>
          </div>
        </div>
        <div className={styles.petsDonated}>
          <h3>Pets Donated</h3>
          <div className={styles.pet}>
            <img src={Cat}></img>
            <div className={styles.petInfo}>
              <h3>Cat</h3>
              <h3>6 Mounths</h3>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default UserProfile
