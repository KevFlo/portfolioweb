import React from 'react';
import styles from "../../styles/Nav.module.css";
import Link from 'next/link';
import Spacer from "../Spacer/Spacer";
import LoginBtn from '../LoginBtn/LoginBtn';
export default Nav;

function Nav(){


    return(
        <>
        <nav>
            <div >
                <ul className={styles.Nav}>
                    <li className={styles.NavliT}><Link href="/">Kevin Flores</Link></li>
                    <li className={styles.Navli}><Link href="/About">About</Link></li>
                    <li className={styles.Navli}><Link href="/Projects">Projects</Link></li>
                    <li className={styles.Navli}><Link href="/Contact">Contact</Link></li> 
                    {/* <li className={styles.Navli}><Link href="/Devlog">DevLog</Link></li> */}
                    <li className={styles.Navli}><LoginBtn/></li>
                </ul>
                
            </div>
            
        </nav>
        <Spacer />
        </>
    );
};
