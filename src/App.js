import React, { startTransition, UseState } from 'react';
import { useNavigate, BrowserRouter as Router, Switch, Route, Routes, Link } from 'react-router-dom';
import './App.css'; 
import Login from './Login'
import Register from './Register'

/* function LoginButton() {
  return (
  <button>
    Login
  </button>
  )
}

function Placeholder() {
  return (
    <div>
      This is a placeholder for share tracker API
    </div>
  )
}

function RegisterButton() {
  return (
  <button>
    Register
  </button>
  )
}
  */


function App() {
  return (
    <Router>
    <div className="Navbar">
      <h1>Share_tracker</h1> 
      <h1 className="NavbarItems">
      {/*<Placeholder />*/}
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

export default App;
