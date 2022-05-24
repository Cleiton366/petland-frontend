import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import styles from './Search.module.css';
import AnimalPreview from './AnimalPreview';

function Search() {
  const { animalType } = useParams();

  const city = 'chorozinho';
  const state = 'ceara';

  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data, status } = await axios.get(`/pet/${animalType}/list?city=${city}&state=${state}`);

        if (status >= 200 && status < 300) {
          setPets(data);
        }
      } catch (err) {
        console.log(err.message);
      }
    })();
  }, [pets]);

  const petList = pets.map((pet) => (
    <AnimalPreview key={pet.petid} pet={pet} />
  ));

  return (
    <div>
      <div>
        {petList}
      </div>
    </div>
  );
}

export default Search;
