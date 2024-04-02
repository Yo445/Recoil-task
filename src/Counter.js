import React from 'react';
import "./App.css"
import {  useRecoilState } from 'recoil';
import {numStateValue} from './App'



function Counter() {

        //made the numStateValue object as an vaule of the Counter state (the component) 
        const [number, setNumber] = useRecoilState(numStateValue)
        return (
          <button className= "button" onClick={() => setNumber(number + 1)}> 
            Plus
          </button>)
  
}

export default Counter;