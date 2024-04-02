import React from "react";
import "./App.css";
import { useRecoilValue } from "recoil";
import {numStateValue, multiplicationNumber} from './App'


function DisplayCounter() {

  const number = useRecoilValue(numStateValue);
  const multiplication = useRecoilValue(multiplicationNumber);
  return (
    <div className="counter-section">
      <h1 className="counter">{number}</h1>
      <h1 className="multiplication">
        Multiplication Number: {multiplication}
      </h1>
    </div>
  );
}
export default DisplayCounter;
