//useContext() = React hook that allows you to share values between multiple levels of components without 
//               passing props through each level

//PROVIDER COMPONENT(component has the data we would like access to (in this case it would be componentA))
//1. import {createContext} from 'react';
//2. export const MyContent = createContext();
//3. <MyContext.Provider value={value}>
//       <Child/>
//   </MyContext.Provider>


//CONSUMER COMPONENTS
//1. import React, {useContext} from 'react';
//   import {MyContext} from './ComponentA';
//2. const value = useContext(MyContext);



import ComponentA from "./ComponentA";

function App() {
  return (
    <div>
      <ComponentA/>
    </div>
  );
}

export default App;
