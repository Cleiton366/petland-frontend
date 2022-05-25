import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReactLoading from 'react-loading';
import styles from './Home.module.css';
import Container from '../Container2';
import CatImage from '../../assets/Cat2.png';
import Dog1 from '../../assets/Dog1.png';
import Dog2 from '../../assets/Dog2.png';

function Home() {
  // this is only for testing getting user information from backend
  const [user, setUser] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data, status } = await axios.get('http://localhost:4000/user-info', {
          withCredentials: true,
        });

        if (status >= 200 && status < 300) {
          setUser(data);
          setLoading(false);
        }
      } catch (err) {
        console.log(err);
        setUser({ dummy: null });
        setLoading(false);
      }
    })();
  }, []);

  if (isLoading) {
    return (
      <ReactLoading className="align-self-center my-5 mx-auto" width="3em" height="min-content" type="spokes" color="black" />
    );
  }

  return (
    <Container user={user}>
      <div className={styles.content}>
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
