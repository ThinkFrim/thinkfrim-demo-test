const Nav = () => {
  return (
    <nav className="flex items-center justify-between px-5">
      <div className="logoContainer">
        <img src="/media/logo/ThinkFrimLogo.svg" alt="" />
      </div>
      <ul className="flex gap-8 max-sm:hidden text-2xl White">
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