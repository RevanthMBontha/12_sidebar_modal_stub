import React from 'react';
import logo from './logo-2.svg';
import { FaTimes } from 'react-icons/fa';
import { socials, links } from './data';
import { useGlobalContext } from './Context';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className={`sidebar ${isSidebarOpen && 'show-sidebar'}`}>
      <div className="sidebar-header">
        <img className="logo" src={logo} alt="Navbar logo" />
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon} {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-icons">
        {socials.map((social) => {
          const { id, url, icon } = social;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
