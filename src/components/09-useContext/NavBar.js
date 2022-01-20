import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <Link  className='navbar-brand' to='/'>
          useContex
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded={!isNavCollapsed ? true : false}
          onClick={handleNavCollapse}
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}
          id='navbarNav'
        >
          <ul className='navbar-nav'>
            <NavLink 
            end
              activeclassname='active'
              className='nav-link'
              aria-current='page'
              to='/'
            >
              Home
            </NavLink>
            <NavLink  activeclassname='active' className='nav-link' to='/about'>
              About
            </NavLink>
            <NavLink  activeclassname='active' className='nav-link' to='/login'>
              Login
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};
