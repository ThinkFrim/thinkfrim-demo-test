/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Banner from '../../sections/banner';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="flex items-center justify-between px-5 py-5">
      <div className="logoContainer">
        <NavLink to="/">
          <img src="/media/logo/ThinkFrimLogo.svg" className='max-sm:w-48 max-sm:mr-7' alt="" />
        </NavLink>
      </div>
      <ul className="flex gap-8 max-sm:hidden text-2xl White lg:mx-52">
        <li>
          <HashLink smooth to="#services">
            About
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#Team">
            Team
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/Contact">
            Contact us
          </HashLink>
        </li>
        <div>
          <img src="/media/icon/Email.svg" alt="" />
        </div>
      </ul>
    </nav>
  )
}

export default Nav;