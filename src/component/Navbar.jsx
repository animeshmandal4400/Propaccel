import React, { useState } from 'react';
import {AiOutlineMenu, AiOutlineClose} from  'react-icons/ai'
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className=' w-full text-xl font-semibold flex flex-wrap gap-6 justify-end px-10'>
      <div className='md:hidden'>
        <button
          onClick={toggleMenu}
          className='focus:outline-none'
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            {menuOpen ? (
              <AiOutlineClose/>
            ) : (
              <AiOutlineMenu/>
            )}
          </svg>
        </button>
      </div>
      <div
        className={`md:flex ${
          menuOpen ? 'block' : 'hidden'
        } md:items-center w-full md:w-auto`}
      >
        <a className='block md:inline-block mr-5'>Blog</a>
        <a className='block md:inline-block mr-5'>Works</a>
        <a className='block md:inline-block mr-5'>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;