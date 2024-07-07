import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  const [htmldata,sethtmldata]=useState(false);
  const handleclick=()=>{
  sethtmldata(true);
  }
  return (
    <div id="main" className="ns-wrapper">
    <h1 data-ns-test='project-name'>Name1</h1>
    <h6 data-ns-test='project-description'>Description: doing this</h6>
    {!htmldata && <button onClick={handleclick}>Expand</button>}
    {htmldata && <div><h1 data-ns-test='project-name'>Name2</h1>
    <h6 data-ns-test='project-description'>Description: doing that</h6>
    <h1 data-ns-test='project-name'>Name3</h1>
    <h6 data-ns-test='project-description'>Description: doing now</h6></div>}
    </div>
  )
}


export default App;
