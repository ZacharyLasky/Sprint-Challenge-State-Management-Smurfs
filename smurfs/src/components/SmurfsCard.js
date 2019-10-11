import React from 'react';
import './SmurfsCard.css'

export default function SmurfsCard(props) {

  return (
   <>
    {props.smurfs.map(smurf => {
      return (
        <div className="card">
          <p>Name: {smurf.name}</p>
          <p>Age: {smurf.age}</p>
          <p>Height: {smurf.height}</p>
        </div>
      )
  })}
   </>
  )
}