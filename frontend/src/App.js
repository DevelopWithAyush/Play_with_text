import './App.css';
import Navbar from './Components/Navbar/Navbar';
import FormText from './Components/Form/FormText';
import Alert from './Components/Alert/Alert';
import { useState } from 'react';
import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import About from './Components/About/About';




function App() {
  const [dark, setDark] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message) => {
    setAlert({
      msg: message,
    }
    )
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }


  const toggleMode = () => {
    if (dark === "light") {
      document.body.style.background = "black"
      setDark("dark")
      showAlert("darkmode enable")


    }
    else {
      document.body.style.background = "white"

      setDark("light")
      showAlert("lightmode enable")

    }
  };


  return (
    // <Router>
    <>
      <Navbar tittle="AyushText" mode={dark} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <FormText mode={dark} showAlert={showAlert} />
      {/* <Routes> */}
      {/* <Route path="/" element={<FormText mode={dark} showAlert={showAlert} />} /> */}
      {/* <Route path="/about" element={<About />} /> */}
      {/* </Routes> */}


    </>
  //  {/* </Router> */ }

  );
}

export default App;
