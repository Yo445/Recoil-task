import React from 'react';
import "./App.css"
import { RecoilRoot, atom, useRecoilState, selector, useRecoilValue } from 'recoil';

const numStateValue = atom({
  key:'numStateValue',
  default : 0
})

const multiplicationNumber = selector({
  key: 'multiplicationNumber',
  get: ({get}) => {
    return get(numStateValue) * 2;
  } 
})

const Counter = () => {
  //made the numStateValue object as an vaule of the Counter state (the component) 
  const [number, setNumber] = useRecoilState(numStateValue)
  return (
    <button className= "button" onClick={() => setNumber(number + 1)}> 
      Plus
    </button>)
}

const DisplayCounter = () => {
  const number = useRecoilValue(numStateValue)
  const multiplication = useRecoilValue(multiplicationNumber)
  return (
    <div className="counter-section">
      <h1 className="counter">{number}</h1>
      <h1 className="multiplication">Multiplication Number: {multiplication}</h1>
    </div>
  );
}

const App = () => {
  return (
    <RecoilRoot>
      <div className="container">
        <DisplayCounter />
        <Counter />
      </div>
    </RecoilRoot>
  );
}

export default App;
