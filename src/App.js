// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import About from './Components/About';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Route,
//   // Link,
//   Routes
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light') //Tells whether dark mode is on or not
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#00060e';
      showAlert(" Dark mode has been enabled", "success"); //The second argument passed case sensitive, you can only choose the type here
      // document.title = "Text Converter - Dark Mode"
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert(" Light mode has been enabled", "success");
      // document.title = "Text Converter - Light Mode"
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title="My First App" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3" >
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About mode={mode}/>} /> */}
            {/* <Route exact path="/" element= /> */}
            {<TextForm showAlert={showAlert} heading="Enter your text below" mode={mode} />}
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
