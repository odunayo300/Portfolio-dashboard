import React, { useState } from 'react';
import './Navbar.css';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Avatar } from '@chakra-ui/react';

export default function Navbar({toggleSidebar}) {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-mode', !darkMode); // Toggle dark mode class on body
    };
    return(
        <div className="navbar">
            <div className="menu-icon" onClick={toggleSidebar}>
                <span>&#9776;</span> {/* Menu icon */}
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
            </div>
            <div className="avatar-navbar">
                <Avatar.Root>
                  <Avatar.Fallback name="Segun Adebayo" />
                  <Avatar.Image src="https://bit.ly/sage-adebayo" />
                </Avatar.Root>
            </div>
            <div className="dark-mode-toggle" onClick={toggleDarkMode}>
                {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </div>
        </div>
    )
}