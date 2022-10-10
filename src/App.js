import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light');
    const toggleMode = () => {
          if(mode === 'light'){
            setmode('dark');
            document.body.style.backgroundColor = '#042743';
            showAlert("Dark mode has been enabled" , "success");
            document.title = "TextUtils - Dark Mode";
          }
          else{
            setmode('light');
            document.body.style.backgroundColor = 'white';
            showAlert("light mode has been enabled" ,"success");
            document.title = "TextUtils - Light Mode";

          }
  }

  const [alert, setAlert] = useState(null);
  const showAlert = (message,type) => {
    setAlert({
      msg:message,
      typ:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }


  const [yellowMode, setyellowMode] = useState('light')
  const toggleYellowMode = () => {
    if(yellowMode === 'light'){
      setyellowMode('dark');
      document.body.style.backgroundColor = '#FFCE30';
      showAlert("Yellow mode has been enabled" , "success");
      document.title = "TextUtils - Yellow Mode";
    }
    else{
      setyellowMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled" ,"success");
      document.title = "TextUtils - Light Mode";
    }
}
  return (
    <>
    {/* <Router> */}
    <Navbar title ='Textutils' mode ={mode} yellowMode={yellowMode} toggleMode = {toggleMode} toggleYellowMode={toggleYellowMode}/>
    <Alert alert={alert} />
    <div className="container">
    {/* <Routes>
          <Route path="/about">
              <About/>
          </Route>
          <Route path="/"> */}
              <TextForm showAlert={showAlert} heading = "Enter the text to analyze below" mode = {mode}  alert={alert}/>
          {/* </Route>
    </Routes> */}
    </div>
    {/* </Router> */}
    </>
    );
}
export default App;
