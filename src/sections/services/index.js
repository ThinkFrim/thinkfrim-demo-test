import React from 'react'
import aboutService from '../../static/Data/aboutData'
import './services.css'

const Services = () => {
  return (
    <div className='services'>
      <div className='my-20'>
        <div className='text-center'>
          <h1 className='text-3xl'>Services we provide</h1>
          <h2 className='text-2xl stroke py-3 font-light'>We build design that build your business</h2>
          <p className='stroke text-'>We're a full-service web agency specializing in custom website design, development, <br /> maintenance, optimization, and marketing. Our expert team creates beautiful, user-friendly websites <br /> that drive results.</p>
        </div>
        <div className='imgContainer my-5'>
          <div className='img grid grid-cols-4'>
            {
              aboutService.map((items) => {
                return (
                  <div className='imgHolder'>
                    <div className='Content mx-5'>
                      <h1 className='White text-2xl'>{items.numbers}</h1>
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