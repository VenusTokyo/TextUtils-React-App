import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState('light') //whether dark mode is enabled or not
  const [alert,setAlert]=useState(null)
  const [color,setColor]=useState('danger')

  const showAlert=(msg,type)=>{
    setAlert({
      msg: msg,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },3000)
  }
  const changeColor=(clr)=>{
    setColor(clr)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#343a40'
      showAlert('Dark Mode has been Enabled','success')
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light Mode has been Enabled','success')

    }
  }
  return (
    <>

      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} changeColor={changeColor}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        {/* here my-3 is for margin in y axis */}
        <TextForm showAlert={showAlert} heading="Enter the Text to Analyze" mode={mode} color={color}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
