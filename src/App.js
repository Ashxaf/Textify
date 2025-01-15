import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React from 'react';


function App() {

  return (
    
   <>
  <Navbar title="Textify"/>
  <div className="container mt-5">
    <h6>Welcome to Textify! This powerful text transformation tool lets you easily convert your text into UPPERCASE, lowercase and more. Designed for simplicity and efficiency, Textify helps you format your text effortlessly for any purpose. Start transforming your text with ease today!</h6>
   </div>
  <div className="container">
  <Textform heading="Enter Your Text Below :"/>
  </div>
   </>
  );
}

export default App;
