/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Sling as Hamburger } from 'hamburger-react'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="flex items-center justify-between max-sm:px-[1rem] px-[3rem] py-[2rem]">
      <div className="logoContainer max-sm:flex max-sm:items-center flex justify-between  max-md:flex max-md:items-center max-xl:flex max-xl:items-center max-sm:w-[100%]">
        <NavLink to="/">
          <img src="/media/logo/ThinkFrimLogo.svg" className='max-sm:w-48 max-sm:mr-7 max-sm:max-w[100vw]' alt="" />
        </NavLink>
        <div className='2xl:hidden'>
          <Hamburger toggled={isOpen} onToggle={toggleNavbar} toggle={setIsOpen} duration={0.8} direction="right" color='#F9BC60' />
        </div>
      </div>
      <ul className="flex gap-8 max-sm:hidden max-md:hidden max-xl:hidden text-2xl White lg:mx-52">
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