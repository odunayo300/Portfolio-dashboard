import {useState} from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import './Layout.css'; // Optional for layout-specific styles

export default function Layout({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
      };

  return (
    <div className="layout">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
      <div className="main-content">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="page-content">{children}</div>
      </div>
    </div>
  );
}