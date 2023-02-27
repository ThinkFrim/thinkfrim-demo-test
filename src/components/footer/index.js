import './footer.css'

const Footer = () => {
  return (
    <footer id='footer'>
      <div className='chineseBlackBg footerHolder flex items-center'>
        <div className='footerContent White pt-10'>
          <a href="tel:+96171455206">71455206</a>
          <h1>Location, address</h1>
          <a href="mailto: thinkfrim@gmail.com">thinkfrim@gmail</a>
        </div>
        <img src="/media/illustrator/contactPhone.svg" alt="" style={{zIndex: 0,}} />
      </div>
    </footer>
  )
}

export default Footer