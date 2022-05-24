import styles from './Home.module.css'
import Container from '../Container/Container'
import CatImage from '../../assets/Cat2.png'
import Dog1 from '../../assets/Dog1.png'
import Dog2 from '../../assets/Dog2.png'
const Home = () => {

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

    const user = await res.json();
    console.log(user);
  }
  
  return (
    <Container>
      <div className={styles.content} onLoad={userInfo}>
        <h1>What do you want to do?</h1>
        <div className={styles.cards}>
          <div className={styles.contentFluid}>
            <img src={CatImage} alt="gatofofin" />
            <p>Adopt a cat</p>
          </div>
          <div className={styles.contentFluid}>
            <img src={Dog1} alt="Dog 1" />
            <p>Adopt a dog</p>
          </div>

          <div className={styles.contentFluid}>
            <img src={Dog2} alt="Dog 2" />
            <p>Help a pet be adopted</p>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Home
