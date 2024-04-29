import React from 'react';
// import styles from "../../styles/Nav.module.css";
import Link from 'next/link';
import LoginBtn from '../../app/LoginBtn';
export default Nav;

function Nav(){
    
    // absolute top-0 w-screen h-28  shadow-2xll sm:mx-auto sm:max-w-lg sm:px-10
    return( 
        <> 
        <nav className='flex items-center justify-between flex-wrap bg-[#141414] w-screen p-12'>
            <div className="text-white w-screen"  >
                <ul className="flex flex-row  px-30 justify-around whitespace-pre-wrap ...">
                    <li className=" px-30 flex justify-around text-6xl font-bold float-left  mr-2"><Link href="/">Kevin Flores</Link></li>
                    <li className="flex items-center justify-around padding-1 padding-left-60px "><Link href="/About">About</Link></li>
                    <li className="flex items-center justify-around padding-1 padding-left-60px "><Link href="/Gallery">Gallery</Link></li>
                    <li className="flex items-center justify-around  px-69 "><Link href="/Projects">Projects</Link></li>
                    <li className="flex items-center float-right justify-around"><Link href="/Contact">Contact</Link></li> 
                    <li className="flex items-center justify-around"><Link href="/DevLog">DevLog</Link></li>
                    <li className="flex leading-normal text-center ... w-40 h-10"><LoginBtn/></li>
                </ul>
                
            </div>
            
        </nav>
        </>
    );
};
