// import React from 'react'
// import { useState } from 'react'

// const App = () => {

//   const [num,setnum] = useState(10)
//   const [user,setuser] = useState('Shivangi')

//   function changenum(){
//     setnum(num+10)
//     setuser('priyanshu')
//   }
//   function changeuser(){
//     setuser('Shivangi')
//   }
//   return (
//     <div>
//       <h1>Value of num is {num} <br/> <br/> Username is {user} </h1>
//       <button onClick={changenum} onDoubleClick={changeuser}>Click</button>
//     </div>
//   )
// }

// export default App

import React from 'react'
import { useState } from 'react'

const App = () => {

  const [num, setnum] = useState(0)

  function increase(){
    setnum(num+1);
  }
  
  function decrease(){
    setnum(num-1);
  }

  function clear(){
    setnum(0);
  }
  function jumpup(){
    setnum(num+5);
  }
  function jumpdown(){
    setnum(num-5);
  }
  return (
    <div>
      <h1> {num} </h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={clear}>Clear</button>
      <button onClick={jumpup}>Increase[5]</button>
      <button onClick={jumpdown}>Decrease[5]</button>
    </div>
  )
}

export default App