import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Header.css'
import { useState } from 'react';


function Header() {
    const [toggle, setToggle] = useState(false);
    return (
        <header className='header'>
            <nav className='nav container'>
                <a href="index.html" className='nav_logo'>Portfolio</a>

                <div className={toggle ? "nav_menu show-menu" : "nav_menu"}>
                    <ul className='nav_list'>
                        <li className="nav_item">
                            <a href="#home" className="nav_link active-link">
                                <i className="bi bi-house-door nav_icon"></i> Home
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#about" className="nav_link active-link">
                                <i className="bi bi-file-person-fill nav_icon"></i>About
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#skills" className="nav_link active-link">
                                <i className="bi bi-substack nav_icon"></i>Skills
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#Project" className="nav_link active-link">
                                <i className="bi bi-projector nav_icon"></i>
                                Project
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#contact" className="nav_link active-link">
                                <i className="bi bi-send-fill nav_icon"></i>
                                Contact
                            </a>
                        </li>

                    </ul>

                    <i className="bi bi-x nav_close" onClick={() => { setToggle(!toggle) }}></i>
                </div>

                

                <div className="nav_toggle" onClick={() => setToggle(!toggle)}>
                    <i className="bi bi-menu-app"></i>
                </div>
            </nav>

        </header>
    )
}

export default Header;
