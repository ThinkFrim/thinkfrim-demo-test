import aboutService from '../../static/Data/aboutData'
import './service.css'
// import { useState, useEffect } from 'react'
const Services = () => {
  return (
    <div className='services GunMetalBg' id='services'>
      <div className='pt-[3.5rem]'>
        <div className='text-center'>
          <h1 className='text-[3rem] max-sm:text-[2rem] White'>Services we provide</h1>
          <p className='White font-light text-[1.3rem] max-sm:text-1xl max-sm:item block max-sm:mx-auto max-sm:max-w-[100vw]'>We're a full-service web agency specializing in custom website design, development, <br class="hidden lg:inline" /> maintenance, optimization, and marketing. Our expert team creates beautiful, user-friendly websites <br /> that drive results.</p>
        </div>
        <div className='imgContainer pt-5'>
          <div className='img grid grid-cols-4 max-sm:grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 2xl:grid-cols-4 xl:grid-cols-4'>
            {
              aboutService.map((items) => {
                return (
                  <div className='imgHolder relative before:bg-black before:absolute before:top-[0%] before:w-[100%] before:h-[100%] before:bg-opacity-60' key={items.id}>
                    <div className='Content absolute top-[15%] max-sm:text-[5%] bottom-[10%] left-[5%] mx-5'>
                      <h1 className='White text-1xl max-sm:text-3xl sm:text-4xl md:text-4xl'>{items.numbers}</h1>
                      <h2 className='White text-2xl max-sm:text-2xl sm:text-2xl md:text-2xl'>{items.title}</h2>
                      <div className='arrows absolute top-[70%]'>
                        <img src="/media/icon/arrow.svg" alt="" />
                      </div>
                    </div>
                    <img className="imgs object-cover object-center w-full h-auto" src={items.img} alt="" />
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services