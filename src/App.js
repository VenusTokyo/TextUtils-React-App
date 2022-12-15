import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App() {
  const [mode, setMode] = useState('light') //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null)
  const [color, setColor] = useState('primary')

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000)
  }
  const changeColor = (clr) => {
    setColor(clr)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#343a40'
      showAlert('Dark Mode has been Enabled', 'success')
      document.title = 'TextUtils DarkMode'
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light Mode has been Enabled', 'success')
      document.title = 'TextUtils LightMode'

    }
  }
  return (
    <>

      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} changeColor={changeColor} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Router>

        <Switch>
          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Enter the Text to Analyze" mode={mode} color={color} />
          </Route>
        </Switch>
        
        </Router>
        {/* here my-3 is for margin in y axis */}

      </div>
    </>
  );
}

export default App;
