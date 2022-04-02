import logo from "./logo.svg";
import colored from './logo-colored.svg';
import React, {useState} from 'react';
import "./Navbar.css";
import { useEffect } from "react";

function Navbar() {
const [navbar, setnavbar] = useState(false);


const changeBackground = (e) =>{
    const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop

    if(winScroll > 500){
        setnavbar(true);
    }
    else
    {
        setnavbar(false);
    }
}

useEffect(() => {
    window.addEventListener('scroll', changeBackground );
}, [])
window.addEventListener('scroll', changeBackground );

    return (
        <div>
            <div className={navbar ? 'Navbar-white': 'Navbar'}>
                <img src ={ navbar ? colored : logo} className = {'logo'}></img>
                <div className ={'button-group'}>  
                    <button className = {'button-blue-signup'}>Sign up</button>
                    <button className = {'button'}>  Sign in</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
