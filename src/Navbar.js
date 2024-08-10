import React, { useState } from 'react'
import { useNavigate, Outlet, BrowserRouter as Router, Switch, Route, Routes, Link } from 'react-router-dom';
import Login from './Login'
import Register from './Register'



export default function Navbar() { 
    return (
        <div className="Navbar">
            <h1>Share_tracker</h1> 
                <h1 className="NavbarItems">
                    <Link to = "/Register">Register</Link>
                    <Link to = "/Login">Login</Link>

            </h1>
            <h2>Index</h2>
            <h3>Your Stocks</h3>
        </div>
            )        
}
