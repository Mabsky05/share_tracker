import React, { useEffect, useState } from 'react'
import { useLocation, Outlet, BrowserRouter as Router, Switch, Route, Routes, Link } from 'react-router-dom';
import Navbar from './Navbar';


export default function NavBarToggle({children}) { 

    const location = useLocation();
    const [navBarState, setNavBarState] = useState(false);

    useEffect(()=> { 
    if (location.pathname == '/Login' || '/Register') {
        setNavBarState(false)
    } else {
        setNavBarState(true)
    }
    }, [location])

    return (
            <div>
                {navBarState && children}
            </div>
            )
}


