/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="flex items-center justify-between px-5">
      <div className="logoContainer">
        <img src="/media/logo/ThinkFrimLogo.svg" className='max-sm:w-48 max-sm:mr-7' alt="" />
      </div>
      <ul className="flex gap-8 max-sm:hidden text-2xl White lg:mx-52">
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Team</a>
        </li>
        <li>
          <a href="">Contact Us</a>
        </li>
        <div>
          <img src="/media/icon/Email.svg" alt="" />
        </div>
      </ul>
    </nav>
  )
}

export default Nav;