import React from 'react';
import logo from '../assets/logo-text.png';

function Header() {

    const whatsappMessageLink = "https://wa.link/wvzfe1";
    
    return (
        <section id="header">
        <nav className="navbar text-base-100 bg-neutral fixed z-10">
           <div className="navbar-start hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a href="#hero" className="hover:text-secondary">Inicio</a></li>
                    <li tabIndex="0">
                        <details>
                            <summary className="hover:text-secondary">Productos</summary>
                            <ul className="p-2 text-neutral">
                            <li><a href="#mates" className="hover:text-primary">Mates</a></li>
                            <li><a href="#joyeria" className="hover:text-primary">Joyeria</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a href="contact" className="hover:text-secondary">Contactános</a></li>
                </ul>
            </div>
            <div className="navbar-center">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-neutral bg-base-100 rounded-box w-52">
                        <li><a href="#hero">Inicio</a></li>
                        <li>
                            <a href="#products">Productos</a>
                            <ul className="p-2">
                                <li><a href="#mates">Mates</a></li>
                                <li><a href="#joyeria">Joyeria</a></li>
                            </ul>
                        </li>
                        <li><a href="#contact">Contactános</a></li>
                    </ul>
                </div>
                <a href="#" className=""><img src={logo} alt="joyamate-logo" className="h-[6vh] m-0"></img></a>
            </div>
            <div className="navbar-end">
                <a href={whatsappMessageLink} target="_blank" className="text-4xl transition-transform duration-300 hover:scale-110 py-1 px-2">
                <ion-icon name="logo-whatsapp"></ion-icon>
                </a>
            </div>
        </nav>
    </section>
    )
}

export default Header;
