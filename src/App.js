import React from 'react';
import './App.css';
import Grades from './Grades';
import Price from './Price';
import Name from './Name';

function App() {
  return (
    <div className="App">
      
        
      <Grades GradeA="(90% Grade A)" GradeB="(70% Grade B)" GradeC="(50% Grade C)"/>
      <hr/>
      <Price PrizeA="Gold Plate" PrizeB="Silver Plate" PrizeC="Brown Plate" /> 
      <hr/>
      <Name NameA="Aplha" NameB="Bravo" NameC="Charlie" /> 
      
    </div>
  );
}

export default App;
