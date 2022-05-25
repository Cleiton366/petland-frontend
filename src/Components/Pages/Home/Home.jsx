import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import Container from '../Container/Container';
import CatImage from '../../assets/Cat2.png';
import Dog1 from '../../assets/Dog1.png';
import Dog2 from '../../assets/Dog2.png';

function Home() {
  // this is only for testing getting user information from backend
  const [user, setUser] = useState(null);
  const [isLoading, setLoading] = useState(true);

  // this is only for testing getting user information from backend
  async function userInfo() {
    const res = await fetch('http://localhost:4000/user-info', {
      method: 'GET',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true,
      },
    });

    setUser(await res.json());
    setLoading(false);
  }

  userInfo().then(() => {

  });
  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <Container username={user.username} avatar={user.avatarurl}>
      <div className={styles.content} onLoad={userInfo}>
        <h1>What do you want to do?</h1>
        <div className={styles.cards}>
          <Link to="/search/cat/everywhere" className="unstyled-link">
            <div className={styles.contentFluid}>
              <img src={CatImage} alt="gatofofin" />
              <p>Adopt a cat</p>
            </div>
          </Link>
          <Link to="/search/dog/everywhere" className="unstyled-link">
            <div className={styles.contentFluid}>
              <img src={Dog1} alt="Dog 1" />
              <p>Adopt a dog</p>
            </div>
          </Link>

          <Link to="/Home" className="unstyled-link">
            <div className={styles.contentFluid}>
              <img src={Dog2} alt="Dog 2" />
              <p>Help a pet be adopted</p>
            </div>
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default Home;
