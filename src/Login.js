import React, { useState, useEffect } from 'react'
import { useLocation, Outlet, BrowserRouter as Router, Switch, Route, Routes, Link } from 'react-router-dom';
import Navbar from './Navbar';


/*const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword0] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')


const navigate = useNavigate()

const onButtonClick = () => {}*/

export default function Login() { 
    const hidden = ['/Login','Register'];
  
    return (

            <div>
                  {!hidden.includes(useLocation.pathname && <Navbar/>)}
                Login page
            </div>

    
)

}


