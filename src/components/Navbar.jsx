import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CgMenuGridO } from 'react-icons/cg';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const activeClassName = 'text-white/90 border-b-2 border-white/90 transition duration-500';
  const inactiveClassName = 'text-white/90 hover:text-gray-300 text-[#676767] transition duration-500';

  return (
    <nav className='bg-[#0F0F0F] text-white/90 p-6'>
      <div className='max-w-[1000px] mx-auto flex justify-between items-center z-50'>
        <p className='inter-tight-bold text-3xl'>Pawan.</p>

        <ul className='md:flex gap-x-4 inter-tight-light text-lg hidden'>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeClassName : inactiveClassName)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? activeClassName : inactiveClassName)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/work"
              className={({ isActive }) => (isActive ? activeClassName : inactiveClassName)}
            >
              Work
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? activeClassName : inactiveClassName)}
            >
              Contact
            </NavLink>
          </li>
        </ul>

        <Link to='/contact' className='hidden md:block'>
          <button className='bg-[#323232] px-6 py-2 rounded-2xl text-lg inter-tight-bold hover:bg-white/90 hover:text-black/90 duration-300'>
            Let's talk
          </button>
        </Link>

        <div className='md:hidden'>
          <CgMenuGridO className='text-3xl cursor-pointer' onClick={() => setMenuOpen(!menuOpen)} />
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full bg-[#0F0F0F] z-30 transition-all duration-300 ease-in-out transform ${
          menuOpen ? 'mt-20 opacity-100' : '-mt-full opacity-0'
        }`}
        style={{ pointerEvents: menuOpen ? 'auto' : 'none' }}
      >
        <ul className='space-y-4 inter-tight-light text-lg p-6 text-center'>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeClassName : inactiveClassName)}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? activeClassName : inactiveClassName)}
              onClick={() => setMenuOpen(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/work"
              className={({ isActive }) => (isActive ? activeClassName : inactiveClassName)}
              onClick={() => setMenuOpen(false)}
            >
              Work
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? activeClassName : inactiveClassName)}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <Link to='/contact'>
              <button className='bg-[#323232] px-6 py-2 rounded-2xl text-lg inter-tight-bold hover:bg-white/90 hover:text-black/90 duration-300 w-full'>
                Let's talk
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
