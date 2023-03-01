import React from 'react'
import Nav from '../../components/nav'

const AboutUs = () => {
  return (
    <div className='about chineseBlackBg h-[100vh]'>
      <Nav />
      <div className='grid grid-cols-2 py-[10rem]'>
        <div className='RaisinBlackBg relative w-[550px] overflow-hidden h-[400px] mx-5'>
          <div className='absolute bottom-0'>
            <img className='w-[300px]' src="/media/illustrator/dotts.svg" alt="" />
          </div>
          <div className='absolute bottom-[3.7rem]'>
            <h1 className='uppercase White font-bold text-[157px] leading-[0]'>About</h1>
          </div>
        </div>
        <div className='mr-14'>
          <h1 className='White py-5 text-4xl font-semibold'>ThinkFrim Agency is a premium design agency.<br />
            We utilize technology and an unmatched <br />
            work ethic to elevate your brand through <br />
            the web channel.</h1>
          <p className='font-light White text-2xl '>We're based out of Beirut, Lebanon with a consultative & <br />
            digital production presence across the continental <br />
            Lebanon.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs