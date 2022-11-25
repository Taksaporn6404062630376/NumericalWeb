// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { NavBar } from './NavBar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Elements/Home';
import Bisection from './Elements/Bisection';
import Falsepo from './Elements/Falsepo';
import Onepoint from './Elements/Onepoint';
import Inverse from './Elements/Inverse';
import Newton from './Elements/Newton';
import Secant from './Elements/Secant';
import Cramers from './Elements/Cramers';
import Taksaporn from './Elements/Taksaporn';
import GaussElimination from './Elements/Gausseliminate';
// import ApexChart from './Elements/chart';
import { Line } from 'react-chartjs-2';
// import "./styles.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/h" element={<Home/>}/>
        <Route path="/bisection" element={<Bisection/>}/>
        <Route path="/falsepo" element={<Falsepo/>}/>
        <Route path="/onepoint" element={<Onepoint/>}/>
        <Route path="/inverse" element={<Inverse/>}/>
        <Route path="/newtonraphson" element={<Newton/>}/>
        <Route path="/secant" element={<Secant/>}/>
        <Route path="/cramer" element={<Cramers/>}/>
        <Route path="/taksaporn" element={<Taksaporn/>}/>
        <Route path="/gaussElimination" element={<GaussElimination/>}/>


        {/* <Route path="/ApexChart" element={<ApexChart/>}/> */}
        
      </Routes>
      </BrowserRouter>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
// const state = {
//   lables: ["Jan","Feb","May"],
//   datasets: [
//     {
//       label:"First",
//       data:[5,22,4,10,11],
//       fill: true,
//       backgroundcolor:"green",
//       bordorColor:"green"
//     },
//     {
//       label:"second",
//       data:[18,25,3,6,17],
//       fill: false,
//       backgroundcolor:"yellow",
//       bordorColor:"yellow"
//     },
//   ] 
// };
// return(
//   <div className="App">
//     <Line data={state}/>
//   </div>
//   );
}

export default App;
