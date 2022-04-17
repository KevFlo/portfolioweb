import React from 'react';
import style from './Nav.css';
export default Nav;

function Nav(){


    return(
        <>
        <nav>
            <div className={style.NavbarH}>
                <ul className="Nav">
                    <li className="Title" href="/">Kevin Flores</li>
                    <li className="Nav" href="/">Home</li>
                    <li className="Nav" href="/About">About</li>
                    <li className="Nav" href="/Projects">Projects</li>
                    <li className="Nav" href="/Contacts">Contact</li> 
                    <li className="Nav" href="/DevLog">Dev Log</li>
                </ul>
            </div>
        </nav>
        </>
    );
};
