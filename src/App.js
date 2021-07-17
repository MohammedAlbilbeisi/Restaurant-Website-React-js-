import React,{useState,useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Products from './components/Products';
import About from './components/About';
import Cantact from './components/Contact';
import { css } from "@emotion/react";
import PropagateLoader from "react-spinners/PropagateLoader";





function App() {
  const[Loading,setLoading] = useState(false);

  const Override = css`
  display: block;
  border-color: red;
  margin-top: 20%;

`;

useEffect(() => {
  
  setLoading(true)
  setTimeout(()=>{
    setLoading(false)
  },5000);
},[])

  

  return (
    <div className="App">
      
      {Loading ?
      <PropagateLoader color={"red"} Loading={Loading} css={Override} size={60}></PropagateLoader>
    :
    <>
    <Navbar/>
    <Header/>
    <Products/>
    <About/>
    <Cantact/>
    </>
}
    </div>
  );
}

export default App;
