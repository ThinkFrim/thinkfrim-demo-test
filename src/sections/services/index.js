import aboutService from '../../static/Data/aboutData'
import './service.css'
// import { useState, useEffect } from 'react'
const Services = () => {
  return (
    <div className='services GunMetalBg' id='services'>
      <div className='pt-[6.5vh]'>
        <div className='text-center'>
          <h1 className='text-[3rem] max-sm:text-[2rem] White'>Services we provide</h1>
          <p className='White font-light text-[1.3rem] max-sm:text-[16px] max-sm:item block max-sm:mx-auto max-sm:max-w-[100vw] break-all'>We're a full-service web agency specializing in custom website design, development, <br /> maintenance, optimization, and marketing. Our expert team creates beautiful, user-friendly websites <br /> that drive results.</p>
        </div>
        <div className='imgContainer mt-5'>
          <div className='img grid max-sm:grid-cols-2 max-md:grid-cols-4  grid-cols-4'>
            {
              aboutService.map((items) => {
                return (
                  <div className='imgHolder relative before:bg-black before:absolute before:top-[0%] before:w-[100%] before:h-[100%] before:bg-opacity-60' key={items.id}>
                    <div className='Content absolute top-[15%] max-sm:text-[5%] bottom-[10%] left-[5%] mx-5'>
                      <h1 className='White text-1xl max-sm:text-[20px]'>{items.numbers}</h1>
                      <h2 className='White text-2xl max-sm:text-[17px]'>{items.title}</h2>
                      <div className='arrows absolute top-[70%]'>
                        <img src="/media/icon/arrow.svg" alt="" />
                      </div>
                    </div>
                    <img className='imgs max-h-[100vh]  2xl:w-[500px]' src={items.img} alt=''/>
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