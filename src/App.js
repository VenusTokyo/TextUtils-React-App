import React from "react";
import logo from "./logo.svg";
import "./App.css";

let hui="harry";
function App() {
  return (
    <>
    {/* // this is a html in js ,this whole html is called jsx and js can be included in between in {}  */}
     {/* /* class is writen by className */ }

    {/* // this return can only return one tag */}
    <nav>
      <li>Home</li>
      <li>about</li>
      <li>contact</li>
      <li>hui</li>
      <h1>Hello {hui}</h1>
    </nav>
    <div className="container">
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus optio obcaecati exercitationem soluta molestias, aut placeat perferendis! Ab, et tempora nulla error, vero pariatur maiores exercitationem, aut accusamus inventore repellendus.</p>
    </div>
    </>
  );
}

export default App;
