import React from 'react'
import aboutService from '../../static/Data/aboutData'
import LatestProjects from '../ourwork'
import './services.css'

const Services = () => {
  return (
    <div className='services GunMetalBg' id='services'>
      <div className='pt-[5vh]'>
        <div className='text-center'>
          <h1 className='text-[3rem] White'>Services we provide</h1>
          <h2 className='text-[2rem] White py-3 font-light'>We build design that build your business</h2>
          <p className='White font-light text-[1.5rem]'>We're a full-service web agency specializing in custom website design, development, <br /> maintenance, optimization, and marketing. Our expert team creates beautiful, user-friendly websites <br /> that drive results.</p>
        </div>
        <div className='imgContainer mt-5'>
          <div className='img grid max-sm:grid-cols-1 grid-cols-4'>
            {
              aboutService.map((items) => {
                return (
                  <div className='imgHolder' key={items.id}>
                    <div className='Content mx-5'>
                      <h1 className='White text-1xl'>{items.numbers}</h1>
                      <h2 className='White text-2xl'>{items.title}</h2>
                      <div className='arrows'>
                        <img src="/media/icon/arrow.svg" alt="" />
                      </div>
                    </div>
                    <img className='imgs' src={items.img} alt="" width={500} />
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