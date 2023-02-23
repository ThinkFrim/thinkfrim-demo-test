import React, { useState } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="flex items-center justify-between px-5">
      <button
        type="button"
        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
        aria-controls="mobile-menu"
        aria-expanded="false"
        onClick={toggleNavbar}
      >
        <span className="sr-only">Open main menu</span>
        {isOpen ? (
          <svg
            className="block h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="block h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>
      {/* <div className="logoContainer">
        <img src="/media/logo/ThinkFrimLogo.svg" alt="" />
      </div>
      <ul className="flex gap-8 max-sm:hidden text-2xl White lg:mx-52">
        <li><a href="">About</a></li>
        <li><a href="">Team</a></li>
        <li><a href="">Contact Us</a></li>
        <div>
          <img src="/media/icon/Email.svg" alt="" />
        </div>
      </ul>

      <div className="hidden">
      </div> */}
    </nav>
  )
}

export default Nav;