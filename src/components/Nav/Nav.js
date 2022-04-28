import React from 'react';
import './Nav.css';
import {  Link } from 'react-router-dom';
export default Nav;

function Nav(){


    return(
        <>
        <nav>
            <div>
                <ul className="Nav">
                    <li className="Navli" ><Link to="/">Kevin Flores</Link></li>
                    <li className="Navli" ><Link to="/About">About</Link></li>
                    <li className="Navli" ><Link to="/Projects">Projects</Link></li>
                    <li className="Navli" ><Link to="/Contact">Contact</Link></li> 
                    <li className="Navli" ><Link to="/DevLog">DevLog</Link></li>
                </ul>
            </div>
        </nav>
        </>
    );
};
