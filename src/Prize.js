import React from 'react';

function Price (props) {

  return (
    <div>
  <h1>{props.PrizeA} for A Grade Positions</h1>
  <h2>{props.PrizeB} for B Grade Positions</h2>
  <h3>{props.PrizeC} for C Grade Positions</h3>
  </div>
  )
}

export default Price;