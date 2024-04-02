# This code is a simple React application that demonstrates the usage of Recoil for state management. Let's break it down briefly:

## Import Statements:

The code imports functions from the Recoil library.
import { RecoilRoot, atom, useRecoilState, selector, useRecoilValue } from 'recoil';

### Two Recoil entities are defined:
 #### 1- numStateValue:This represents an atom, which is a unit of state in Recoil. It holds a numerical value with a default of 0.

 #### 2- multiplicationNumber: This represents a selector, which computes a derived value based on the value of numStateValue. It multiplies the value of numStateValue by 2.

### Components:

#### Counter: This component renders a button labeled "Plus". When clicked, it increments the value of numStateValue using the setNumber function obtained from the useRecoilState hook.

#### DisplayCounter: This component displays the current value of numStateValue and the computed value from the multiplicationNumber selector. It uses the useRecoilValue hook to access the values.
![Screenshot 2024-04-02 230117](https://github.com/Yo445/Recoil-task/assets/130509394/4c2970a4-c3cc-40a5-9167-393fecaeed1b)
