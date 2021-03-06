import React, { useEffect } from 'react';

import style from './AnimalPreview.module.css';

export default function AnimalPreview({ pet }) {
  const {
    age, city, sstate, medicalcondition, petname, petphoto,
  } = pet;

  return (
    <div className={`${style.animalPreview} roboto d-flex align-items-center m-2 shadow-item`}>
      <div className={`${style.apContent} d-flex align-middle`}>
        <img
          className={`${style.apImage} img-fluid align-middle mx-auto`}
          src={petphoto || 'https://i.imgur.com/gJmbboJ.png'}
          alt="Animal preview"
        />

      </div>
      <div className={`${style.apDescription} px-5 py-2`}>
        {`Name: ${petname}`}
        <br />
        {`Age: ${age} ${(age === '1') ? 'Year' : 'Years'}`}
        <br />
        {`Location: ${city}, ${sstate}`}
        <br />
        {`Medical Condition: ${medicalcondition}`}
      </div>
    </div>
  );
}
