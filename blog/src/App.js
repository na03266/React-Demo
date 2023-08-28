import React from 'react';
import logo from '.logo.svg'
import './App.css'

function App(){
  const [time, setTime]= useState(1);

  const handleClick = () =>{
    setTime(time+1);
  };

  return(
       <div>
        <span>현재 시간 : {time}시 </span>
        <button onClick={handleClick}>Update</button>
       </div>
        
  )
}

export default App;