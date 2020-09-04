import React, { useState } from 'react';
import { Router, Link } from "@reach/router"
import Header from "./Components/Header"
import Display from "./Components/Display"
import Registration from "./Components/Registration"
import One from "./Components/One"
import New from "./Components/New"
import Update from "./Components/Update"
import FormAlgo from "./Components/FormAlgo"
import Visualizer from "./AlgoVisualizer/Visualizer"
import './App.css';


function App() {
  return (
    <div>
      <div className="App">
        <div>
          <h1 style={{margin:"40px 0px 0px 0px"}}>An Algorithm Visualizer</h1>
          <h4>A full stack Javascript Project using Express, React, Mongoose and Node. 
            </h4>
            <h4 style={{margin:"20px 0px 0px 0px", color:"grey"}}>by Petra Franklin and Tash Elijah Dutton</h4><br></br>
        </div>
        <Router>
          <Visualizer path="/"/>
          <Registration path="/new"/>
          <Display path="/algos/"/>
          <New path="/algos/:id/newAlgo"/>
          <Update path="/algos/:id/:aid/update"/>
          <One path="/algos/:id/:aid"/>
        </Router>
        <footer className="text-center" style={{margin:"4% 0% 20% 0%", height:"75px", width:"100%"}}>
          <Link to="/">Visualizer</Link> |&nbsp;
          <Link to="/algos/">All our Algos are not here</Link>  |&nbsp;
          <Link to="/algos/5f2445a4784acd0598b11ece/newAlgo">Add an Algo</Link> |&nbsp;
          <Link to="/pathfinder">Playground</Link> |&nbsp;
          <Link to="/one/">Random Algo</Link> |&nbsp;
          <Link to="/new">Login</Link><br></br>
        </footer><br></br>
      </div>
    </div>
  );
}

export default App;
