import React, { startTransition, UseState } from 'react';
import { useLocation, Outlet, BrowserRouter as Router, Switch, Route, Routes, Link } from 'react-router-dom';
import './App.css'; 
import Login from './Login'
import Register from './Register'
import Navbar from './Navbar';
import NavBarToggle from './NavbarToggle';


function App() {
  const hidden = ['/Login','Register'];
  // let location = useLocation();
  return (
 
  <Router>
    <NavBarToggle>
      <Navbar/>
    </NavBarToggle>
   
    <Routes>   
      <Route path = "/" element = {<Navbar/>}/>
      <Route path = "/Login" element = {<Login />}/>
      <Route path = "/Register" element = {<Register/>}></Route>
    </Routes>
  </Router>



  );
}

/*
function App() {
  return (
    <Router>
    <div className="Navbar">
      <h1>Share_tracker</h1> 
      <h1 className="NavbarItems">
      {/*<Placeholder />}
      <Link to = "/Register">Register</Link>
      <Link to = "/Login">Login</Link>

      <Routes>
      <Route path = "/Login" element = {<Login />}></Route>
      <Route path = "/Register" element = {<Register/>}></Route>
      </Routes>
      </h1>
      <h2>Index</h2>
      <h3>Your Stocks</h3>
    </div>
    </Router>

  );
}
*/
export default App;
