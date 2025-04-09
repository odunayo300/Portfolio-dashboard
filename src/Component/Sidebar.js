import React from 'react'
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { Avatar } from '@chakra-ui/react';

export default function Sidebar({isOpen, toggleSidebar}) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
    <div className="avatar-section">
      <Avatar.Root className='avatar'>
        <Avatar.Fallback name="Segun Adebayo" />
        <Avatar.Image src="https://bit.ly/sage-adebayo" />
      </Avatar.Root>
      <h3 className="job-title">Web Developer</h3>
    </div>
    <nav className="sidebar-links">
      <Link to="/" onClick={toggleSidebar}>Dashboard</Link>
      <Link to="/about" onClick={toggleSidebar}>About</Link>
      <Link to="/recent-projects" onClick={toggleSidebar}>Recent Projects</Link>
      <Link to="/earning-summary" onClick={toggleSidebar}>Earning Summary</Link>
    </nav>
  </div>
  )
}
