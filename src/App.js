import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState('light') //whether dark mode is enabled or not
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#343a40'
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }

  }
  return (
    <>

      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        {/* here my-3 is for margin in y axis */}
        <TextForm heading="Enter the Text to Analyze" mode={mode}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
