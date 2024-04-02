import React from 'react';
import "./App.css"
import { RecoilRoot, atom, useRecoilState, selector, useRecoilValue } from 'recoil';
import Counter from './Counter';
import DisplayCounter from './DisplayCounter';

export const numStateValue = atom({
  key:'numStateValue',
  default : 0
})

export const multiplicationNumber = selector({
  key: 'multiplicationNumber',
  get: ({get}) => {
    return get(numStateValue) * 2;
  } 
})

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
