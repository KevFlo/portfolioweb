import React from 'react';
import styles from "../../styles/Nav.module.css";
import Link from 'next/link';
export default Nav;

function Nav(){


    return(
        <>
        <nav>
            <div>
                <ul className={styles.Nav}>
                    <li className={styles.Navli}><Link href="/">Kevin Flores</Link></li>
                    <li className={styles.Navli}><Link href="/About">About</Link></li>
                    <li className={styles.Navli}><Link href="/Projects">Projects</Link></li>
                    <li className={styles.Navli}><Link href="/Contact">Contact</Link></li> 
                    <li className={styles.Navli}><Link href="/DevLog">DevLog</Link></li>
                </ul>
            </div>
        </nav>
        </>
    );
};
