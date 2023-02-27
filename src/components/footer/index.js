import './footer.css'

const Footer = () => {
  return (
    <footer id='footer'>
      <div className="footerContentHolder chineseBlackBg flex flex-col items-center pt-16">
        <div className='RajahBg contactBox w-1/2 flex items-center justify-between px-10'>
          <h1 className='text-4xl'>Do you have any project ?</h1>
          <img src="/media/illustrator/footerDesing.svg" alt="" />
          <button className='contactFooterBtn darkGreenBg p-3 w-1/6 White text-1xl'>Contact Us</button>
        </div>
        <div>

        </div>
      </div>
    </footer>
  )
}

export default Footer