import axios from 'axios';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './AnimalPreview.css';

export default function AnimalPreview({ pet }) {
  const {
    age, city, sstate, medicalcondition, petname, petphoto,
  } = pet;

  return (
    <div className="roboto d-flex align-items-center animal-preview m-2">
      <div className="ap-content d-flex align-middle">
        <img
          className="img-fluid align-middle mx-auto ap-image"
          src={petphoto || 'https://i.imgur.com/gJmbboJ.png'}
          alt="Animal preview"
        />

      </div>
      <div className="ap-description px-5 py-2">
        {`Name: ${petname}`}
        <br />
        {`Age: ${age}`}
        <br />
        {`Location: ${city}, ${sstate}`}
        <br />
        {`Medical Condition: ${medicalcondition}`}
      </div>
    </div>
  );
}

AnimalPreview.propTypes = {
  pet: PropTypes.shape({
    age: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    sstate: PropTypes.string.isRequired,
    medicalcondition: PropTypes.string.isRequired,
    petname: PropTypes.string.isRequired,
    petphoto: PropTypes.string,
  }).isRequired,
};
