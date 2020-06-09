import React from 'react';

function Grades (props) {

  return (
    <div>
  <h1>{props.GradeA} Marks Students</h1>
  <h2>{props.GradeB} Marks Students</h2>
  <h3>{props.GradeC} Marks Students</h3>
  </div>
  )
}

export default Grades;