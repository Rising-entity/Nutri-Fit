
import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from '../src/Components/Home/Navbar'
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Copywrite from "./Components/Home/Copywrite";
import Nutrients from './Components/Nutrients/Nutrients';
import News from "../src/Components/News/News"
import Section1 from './Components/Home/Section1';



function App() {
  const [Food, setFood] = useState("");
   
  useEffect(() => {
    setFood("");
  }, [Food]);

  const handleOnClick = async () => {
    
    const inputValue = document.getElementById("searchFood").value;
     setFood(inputValue);
  };



  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          {/* <Section1/> */}
          <Routes>
            <Route exact path='/' element={< Home onClick={handleOnClick} />}></Route>
            <Route exact path='/about' element={< About />}></Route>
            <Route exact path='/Nutrients' element={< Nutrients food={Food} />}></Route>
            <Route exact path='/News' element={< News />}></Route>
          </Routes> 
           <Copywrite />
        </div>
      </Router>

    </>
  );
}

export default App;



