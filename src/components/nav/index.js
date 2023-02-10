// import React from 'react'
// import './nav.css'
const Nav = () => {
  return (
    <nav className="flex align-baseline justify-between py-5 text-white">
      <img src="/media/logo/ThinkFrimLogo.svg" alt="" />
      <ul className="flex items-center gap-3 font-semibold text-xl">
        <li className=''>About</li>
        <li className=''>Team</li>
        <div className="flex items-center gap-3">
          <li className=''>Contact Us</li>
          <img className="icon" src="/media/icon/Email.svg" alt="" />
        </div>
      </ul>
    </nav>
  )
}

export default Nav;