import React, { UseState } from 'react';
import { BrowserRouter as Router, Routes, Route, Switch, Link } from 'react-router-dom';
import './App.css'; 
import Login from './Login'

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

function LoginButton() {
  return (
  <button>
    Login
  </button>
  )
}

function App() {
  return (
    <Router>
    <div className="Navbar">
      <h1>Share_tracker</h1> 
      <h1 className="NavbarItems">
      <Placeholder />
      <RegisterButton />
      <Routes>
      <Route path="/Login"><LoginButton/></Route>
      </Routes>
      </h1>
      <h2>Index</h2>
      <h3>Your Stocks</h3>
    </div>
    </Router>

  );
}

export default App;
