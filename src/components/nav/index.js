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
    <nav className="px-2 sm:px-4 py-10 rounded">
      <div className="container flex flex-wrap items-center justify-between md:mx-4">
        <a href="/" className="flex items-center">
          <img src="/media/logo/ThinkFrimLogo.svg" className="max-w-1/4" alt="ThinkFrim.svg" />
        </a>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <Hamburger toggled={isOpen} onToggle={toggleNavbar} toggle={setIsOpen} duration={0.8} direction="right" color='#F9BC60' />
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <HashLink smooth className="block py-2 pl-3 pr-4 text-white rounded  md:hover:bg-transparent md:text-2xl md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white md:text-[20px] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to="Services">
                Service
              </HashLink>
            </li>
            <li>
              <HashLink smooth className="block py-2 pl-3 pr-4 text-white rounded  md:hover:bg-transparent md:text-2xl md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white md:text-[20px] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to="/About">
                About
              </HashLink>
            </li>
            <li>
              <HashLink smooth className="block py-2 pl-3 pr-4 text-white rounded  md:hover:bg-transparent md:text-2xl md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white md:text-[20px] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to="/Contact">
                Contact us
              </HashLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;