import React from 'react'
import aboutService from '../../static/Data/aboutData'

const Services = () => {
  return (
    <div className='services'>
      <div className='py-20'>
        <div className='text-center'>
          <h1 className='text-3xl'>Services we provide</h1>
          <h2 className='text-2xl stroke py-3 font-light'>We build design that build your business</h2>
          <p className='stroke'>We're a full-service web agency specializing in custom website design, development, <br /> maintenance, optimization, and marketing. Our expert team creates beautiful, user-friendly websites <br /> that drive results.</p>
        </div>
        <div className='imgContainer'>
          <div className='cards float-left py-10'>
            {
              aboutService.map((items) => {
                return (
                  <div className='imgHolder'>
                    <img src={items.img} alt="" />
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