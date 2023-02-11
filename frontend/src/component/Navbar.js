import React, { useContext, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink } from 'react-router-dom';
import { Usercontext } from '../App';

const Navbar = () => {
    const { state, dispatch } = useContext(Usercontext);

    const Routing = () => {
        if (!state) {
            return (
                <>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/weather">Weather</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/signin">SignIn</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/signup">SignUp</NavLink>
                    </li>
                </>
            );
        }
        else {
            return (
                <>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/weather">Weather</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/logout">logout</NavLink>
                    </li>
                </>
            );
        };
        
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div class="Logo_name">
                        <i class="fa-regular fa-snowflake"></i> <span> </span>  <span class="name">Jil</span>Weather  <span> </span>  <i class="fa-regular fa-snowflake"></i>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <Routing />
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;