import React from 'react'
import Cards from '../../components/cards';
import latestWork from '../../static/Data/latestWork';

const LatestProjects = () => {
    return (
        <div className='ourWorkContainer GunMetalBg h-full '>
            <div>
                <div className='flex items-center justify-between mx-6 pt-5'style={{padding:'50px'
                }}>
                    <h1 className='White text-5xl'>Our Latest Work</h1>
                    <div>
                        <img src="/media/icon/showAll.svg" alt="arrow.svg" />
                    </div>
                </div>
                <Cards />
            </div>
        </div>
    )
}

export default LatestProjects;