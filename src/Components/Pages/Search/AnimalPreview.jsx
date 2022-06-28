import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import style from './AnimalPreview.module.css'

export default function AnimalPreview({ pet }) {
  const { age, city, sstate, medicalcondition, petname, petphoto } = pet

  return (
    <div
      className={`${style.animalPreview} roboto d-flex align-items-center m-2 shadow-item`}
    >
      <div className={`${style.apContent} d-flex align-middle`}>
        <img
          className={`${style.apImage} img-fluid align-middle mx-auto`}
          src={petphoto || 'https://i.imgur.com/gJmbboJ.png'}
          alt="Animal preview"
        />
      </div>
      <Link
        to={`/Adopt/${pet.petid}`}
        className={`${style.apDescription} px-5 py-2`}
      >
        {`Name: ${petname}`}
        <br />
        {`Age: ${age}`}
        <br />
        {`Location: ${city}, ${sstate}`}
        <br />
        {`Medical Condition: ${medicalcondition}`}
      </Link>
    </div>
  )
}
