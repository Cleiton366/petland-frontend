import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactLoading from 'react-loading';
import styles from './DonatePet.module.css';
import Container from '../Container2';
import ChooseImage from '../../assets/ChooseImagePet.png';

function DonatePet() {
  const hiddenFileInput = React.useRef(null);
  const [user, setUser] = useState(null);
  const [petImageUse, setImage] = useState(null);
  const [petNameUse, setName] = useState(null);
  const [petCityUse, setCity] = useState(null);
  const [petStateUse, setState] = useState(null);
  const [petAgeUse, setAge] = useState(null);
  const [petConditionUse, setCondition] = useState(null);
  const [petTypeUse, setType] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [agree, setAgree] = useState(false);
  const submit = async () => {
    try {
      console.log(petImageUse);
      console.log(typeof petImageUse);
      if (!user
        || !petImageUse
        || !petNameUse
        || !petCityUse
        || !petStateUse
        || !petAgeUse
        || !petConditionUse
        || !petTypeUse
        || !agree) {
        alert('Por favor, preencha todos os campos!');
        return false;
      }
      const { data, status } = await axios.post('http://localhost:4000/pet/new', {
        withCredentials: true,
        headers: { 'Content-Type': 'multipart/form-data' },
        pet: {
          donatorId: user.id,
          ownerId: null,
          petName: petNameUse,
          petAddress: {
            city: petCityUse,
            state: petStateUse,
          },
          age: petAgeUse,
          medicalCondition: petConditionUse,
          petType: petTypeUse,
          image: petImageUse,
        },
      });
      console.log(data);
      return true;
    } catch (error) {
      console.error(error.response.data);
      return true;
    }
  };
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const imageHandle = (e) => {
    setImage(e.target.files[0]);
  };
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

  useEffect(() => {
    (async () => {
      const { id } = await getUser();
    })();
  }, []);

  useEffect(() => {
    if (!petImageUse) {
      setImagePreview(ChooseImage);
      return;
    }

    const objectUrl = URL.createObjectURL(petImageUse);
    setImagePreview(objectUrl);
  }, [petImageUse]);

  if (!user) {
    return (
      <ReactLoading className="align-self-center my-5 mx-auto" width="3em" height="min-content" type="spokes" color="black" />
    );
  }

  const { username, avatarurl, email } = user;

  return (
    <Container user={user}>
      <div className={styles.content}>
        <form className={styles.form}>
          <button type="button" onClick={handleClick}>
            <img src={imagePreview} alt="selectImage" className={styles.imagePreview} />
          </button>
          <div className={styles.itemForm}>
            <input type="file" ref={hiddenFileInput} style={{ display: 'none' }} onChange={imageHandle} />
          </div>
          <div className={styles.itemForm}>
            <div className={styles.itemLabel}>
              Name:
            </div>
            <div className={styles.itemInput}>
              <input type="text" value={petNameUse} onChange={(e) => setName(e.target.value)} />
            </div>
          </div>
          <div className={styles.itemForm}>
            <div className={styles.itemLabel}>
              City:
            </div>
            <div className={styles.itemInput}>
              <input type="text" value={petCityUse} onChange={(e) => setCity(e.target.value)} />
            </div>
          </div>
          <div className={styles.itemForm}>
            <div className={styles.itemLabel}>
              State:
            </div>
            <div className={styles.itemInput}>
              <input type="text" value={petStateUse} onChange={(e) => setState(e.target.value)} />
            </div>
          </div>
          <div className={styles.itemForm}>
            <div className={styles.itemLabel}>
              Age:
            </div>
            <div className={styles.itemInput}>
              <input type="text" value={petAgeUse} onChange={(e) => setAge(parseInt(e.target.value, 10))} />
            </div>
          </div>
          <div className={styles.itemForm}>
            <div className={styles.itemLabel}>
              Medical Condition:
            </div>
            <div className={styles.itemInput}>
              <input type="text" value={petConditionUse} onChange={(e) => setCondition(e.target.value)} />
            </div>
          </div>
          <div className={styles.itemForm2}>
            <div className={styles.itemLabel2}>
              <input type="radio" name="type" value="cat" onChange={(e) => setType(e.target.value)} />
            </div>
            <div className={styles.itemLabel2}>
              Cat
            </div>
            <div className={styles.itemLabel2}>
              <input type="radio" name="type" value="dog" onChange={(e) => setType(e.target.value)} />
            </div>
            <div className={styles.itemLabel2}>
              Dog
            </div>
          </div>
          <div className={styles.itemForm2}>
            <div className={styles.itemLabel2}>
              <input type="checkbox" name="terms" onClick={(e) => { setAgree(!agree); }} />
            </div>
            <div className={styles.itemLabel2}>
              I agree that I cannot sell any animals on this plataform.
            </div>
          </div>
          <div className={styles.itemForm2}>
            <button type="button" onClick={submit} className={styles.submitButton}>Submit</button>
          </div>
        </form>
      </div>
    </Container>
  );
}

export default DonatePet;
