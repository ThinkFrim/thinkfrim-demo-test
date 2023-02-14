// import React from 'react'
// import './nav.css'
const Nav = () => {
  return (
    <nav className="flex items-center justify-between mx-16">
      <div className="logoContainer">
        <img src="/media/logo/ThinkFrimLogo.svg" alt="" />
      </div>
      <ul className="flex gap-8 text-2xl text-white">
        <li><a href="">About</a></li>
        <li><a href="">Team</a></li>
        <li><a href="">Contact Us</a></li>
        <div>
          <img src="/media/icon/Email.svg" alt="" />
        </div>
      </ul>
    </nav>
  )
}

export default Nav;