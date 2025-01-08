import './App.css';
import React, { useState } from 'react'
import About from './components/About';
import Navbar from './components/navbar';
import TextForm from './components/TextForm';
import Alerts from './components/Alerts';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState();

  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 2000);
  }
  
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode is enabled", "success");
      document.title = "Textutiles - darkmode";
      // setInterval(() => {
      //   document.title = "Textutiles is amazing"
      // }, 2500);
      // setInterval(() => {
      //   document.title = "Install Textutiles Now"
      // }, 1000);
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("light mode is enabled", "success");
      document.title = "Textutiles - darkmode";
      
    }
  }
   
  return (
    <>
    <Router>
        <Navbar title="TextUtiles" aboutText = "About TextUtiles" mode={mode} toggleMode={toggleMode}/> 
        <div className="container my-3" >
        <Alerts alert={alert}/>
          <Routes>
            <Route exact path="/about" element={<About mode={mode}/>}/>
            <Route exact path="/"
              element={<TextForm showAlert={showAlert} heading = "Enter the text to analyze" mode={mode}/>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;