import React from 'react';

function Header() {
    return (
        <section id="header">
        <nav className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a href="hero">Inicio</a></li>
                        <li>
                            <a href="products">Productos</a>
                            <ul className="p-2">
                                <li><a href="mates">Mates</a></li>
                                <li><a href="joyeria">Joyeria</a></li>
                            </ul>
                        </li>
                        <li><a href="contact">Contactános</a></li>
                    </ul>
                </div>
                <a href="#" className="btn btn-ghost normal-case text-xl">JoyaMate</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a href="hero">Inicio</a></li>
                    <li tabIndex="0">
                        <details>
                            <summary>Productos</summary>
                            <ul className="p-2">
                            <li><a href="mates">Mates</a></li>
                            <li><a href="joyeria">Joyeria</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a href="contact">Contactános</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a href="#" className="text-3xl transition-transform duration-300 hover:scale-110">
                <ion-icon name="logo-whatsapp"></ion-icon>
                </a>
            </div>
        </nav>
    </section>
    )
}

export default Header;
