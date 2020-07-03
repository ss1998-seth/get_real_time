import React,{useState} from 'react';


const App= () => {

let newTime =new Date().toLocaleTimeString();

const [ctime,setctime] =useState(newTime);

const updateTime=()=>
{
  newTime=new Date().toLocaleTimeString(); 
  setctime(newTime);
}
  return (
<>
<h1>{ctime}</h1>
<button onClick={updateTime}>Get time</button>
</>

  );
}

  export default App;
