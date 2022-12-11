import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return(
    <>
      
      <Navbar title ="TextUtils" aboutText="About Us"/>
      <div className="container my-3"> 
      {/* here my-3 is for margin in y axis */}
      <TextForm heading="Enter the Text to Analyze"/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
