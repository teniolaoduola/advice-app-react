import React, { useEffect } from "react";
import { useState } from "react";

import './App.css'

const API_URL = 'https://api.adviceslip.com/advice';

const App = () => {
  const [advice,setAdvice]=useState("");
  
  const getAdvice = async() =>{
    const response = await fetch (`${API_URL}`);
    const data = await response.json();
    setAdvice(data.slip.advice);
  }
  useEffect(()=>{
    getAdvice();
  },[]);
  
  return (
  <>
  <div className="app">
    <div className="card">
    <h1 className="heading">{advice}</h1>
    <button className="button" onClick={getAdvice}>
      <span>GIVE ME ADVICE!</span>
    </button>
    </div>
  </div>

  

  
  </>
  
  )

}

export default App;