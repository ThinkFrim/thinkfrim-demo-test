import React from 'react'
import Nav from '../../components/nav'

const AboutUs = () => {
  return (
    <div className='about chineseBlackBg h-[100vh]'>
      <div className="py-5">
        <Nav />
      </div>
      <div className='flex items-center justify-between gap-[5rem]'>
        <div className='mt-[20vh] mx-[2vw] overflow-clip RaisinBlackBg relative RaisinBlackBg py-[10vh] w-[40vw] h-[55vh]'>
          <div className='absolute top-[14vh]'>
            <img src="/media/illustrator/dotts.svg" className='pb-5' alt="" width={350} />
          </div>
          <h1 className='absolute bottom-0 White text-[13.3rem] font-extrabold uppercase'>About</h1>
        </div>
        <div className='mx-14'>
          <h1 className='White text-4xl font-semibold py-5'>ThinkFrim Agency is a premium design agency. <br /> We utilize technology and an unmatched <br /> work ethic to elevate your brand through <br /> the web channel.</h1>
          <p className='White  text-2xl font-light'>We're based out of Beirut, Lebanon with a consultative & <br /> digital production presence across the continental Lebanon.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs