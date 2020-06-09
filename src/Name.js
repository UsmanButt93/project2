import React from 'react';

function Name (props) {

  return (
    <div>
  <h1>A Grade Students Called {props.NameA} </h1>
  <h2>B Grade Students Called {props.NameB} </h2>
  <h3>C Grade Students Called {props.NameC}</h3>
  </div>
  )
}

export default Name;