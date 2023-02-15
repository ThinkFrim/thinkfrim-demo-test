import React from 'react'
import services from '../../static/Data/aboutData';
const Cards = () => {
    return (
        <div className='cardContainer'>
            <div className='cardBox flex flex-col3 flex-wrap items-center gap-5 py-10'>
                {
                    services.map((cardItems) => {
                        return (
                            <div className='cardContent' key={cardItems.id}>
                                <div className=''>
                                    <img src={cardItems.img} alt="icons.svg" />
                                </div>
                                <div className='py-5 border'>
                                    <h1 className='py-1'>{cardItems.title}</h1>
                                    <h2 className='break-words'>{cardItems.description}</h2>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Cards;