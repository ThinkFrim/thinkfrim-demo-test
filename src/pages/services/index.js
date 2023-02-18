import React from 'react'
import Cards from '../../components/cards'

const Services = () => {
  return (
    <div className='services'>
      <div>
        <div className='text-center py-6'>
          <h1 className='text-3xl stroke'>Services we provide</h1>
          <h2 className='text-2xl stroke py-3 font-light'>We build design that build your business</h2>
          <p className='stroke'>We're a full-service web agency specializing in custom website design, development, <br /> maintenance, optimization, and marketing. Our expert team creates beautiful, user-friendly websites <br /> that drive results.</p>
        </div>
        <Cards />
      </div>
    </div>
  )
}

export default Services