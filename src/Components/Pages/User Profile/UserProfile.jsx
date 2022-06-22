import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReactLoading from 'react-loading';
import styles from './UserProfile.module.css';
import Container from '../Container2';
import AddPet from '../../assets/AddPet.png';

function UserProfile() {
  const [user, setUser] = useState(null);
  const [donatedPets, setDonatedPets] = useState(null);
  const [adoptedPets, setAdoptedPets] = useState(null);

  const getUser = async () => {
    try {
      const { data, status } = await axios.get('http://localhost:4000/user-info', {
        withCredentials: true,
      });

      if (status >= 200 && status < 300) {
        setUser(data);
        return data;
      }
    } catch (err) {
      console.log(err);
      setUser({ dummy: null });
    }
    return { dummy: null };
  };

  const getDonatedPets = async (userid) => {
    try {
      const { data, status } = await axios.get('http://localhost:4000/donatedPets', {
        withCredentials: true,
        headers: { userid },
      });

      if (status >= 200 && status < 300) {
        setDonatedPets(data);
        return data;
      }
    } catch (err) {
      console.log(err);
      setDonatedPets([null]);
    }
    return [null];
  };

  const getAdoptedPets = async (userid) => {
    try {
      const { data, status } = await axios.get('http://localhost:4000/donatedPets', {
        withCredentials: true,
        headers: { userid },
      });

      if (status >= 200 && status < 300) {
        setAdoptedPets(data);
        return data;
      }
    } catch (err) {
      console.log(err);
      setAdoptedPets([null]);
    }
    return [null];
  };

  useEffect(() => {
    (async () => {
      const { id } = await getUser();
      const p1 = getDonatedPets(id);
      const p2 = getAdoptedPets(id);

      await p1;
      await p2;
    })();
  }, []);

  if (!user) {
    return (
      <ReactLoading className="align-self-center my-5 mx-auto" width="3em" height="min-content" type="spokes" color="black" />
    );
  }
  if (!donatedPets) {
    return (
      <ReactLoading className="align-self-center my-5 mx-auto" width="3em" height="min-content" type="spokes" color="black" />
    );
  }
  if (!adoptedPets) {
    return (
      <ReactLoading className="align-self-center my-5 mx-auto" width="3em" height="min-content" type="spokes" color="black" />
    );
  }

  const { username, avatarurl, email } = user;

  return (
    <Container user={user}>
      <div className={styles.userInfo}>
        <div className={styles.userImage}>
          <img src={avatarurl} alt="Profile preview" />
          <h3>{username}</h3>
        </div>
        <div className={styles.userInfos}>
          <h4>{email}</h4>
        </div>
      </div>
      <div className={styles.pets}>
        <div className={styles.petsOwned}>
          <h3>Pets Owned</h3>
          {
            adoptedPets.map((pet) => (
              <div className={styles.petDiv}>
                <div key={pet.petid} className={styles.pet}>
                  <img src={pet.image} alt="Animal" />
                  <div className={styles.petInfo}>
                    <h3>{pet.petname}</h3>
                    <h3>{`${pet.age} Years`}</h3>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        <div className={styles.petsDonated}>
          <h3>Pets Donated</h3>
          <Link to="/DonatePet">
            <div key={null} className={styles.pet}>
              <img src={AddPet} alt="Animal" />
            </div>
          </Link>
          {
            donatedPets.map((pet) => (
              <div className={styles.petDiv}>
                <div key={pet.petid} className={styles.pet}>
                  <img src={pet.petphoto} alt="Animal" />
                  <div className={styles.petInfo}>
                    <h3>{pet.petname}</h3>
                    <h3>{`${pet.age} Years`}</h3>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </Container>
  );
}

export default UserProfile;
