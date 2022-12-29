import React from 'react'
import Restaurant from './component/Basics/Restaurant';

// const App = () => {

//   return <restaurant/>;
  
// };

// function App(){
//   return <h1>Hello World</h1>;
// }

const App = ()=>{
  return (
    //why this is not working
    //<div>Hello World!</div>
    <Restaurant/>
  )
};

// How react is actually looking into it
// const App = ()=>{
//   return React.createElement("h1",{},"Hello World");
// };


// const Name = ()=>{
//   return <h1>Avinash Modi</h1>
// };

export default App;
