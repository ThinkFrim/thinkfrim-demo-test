import React from 'react'

const Banner = () => {
    return (
        <section id='banner' className='root chineseBlackBg'>
            <div className='md:container flex items-center'>
                <div>
                    <h1 className='americanOrange'>Transform your online image <br /> with a professional website.</h1>
                    <h2>Get ahead of the competition with <br /> a custom-built website</h2>
                    <div>
                        <button>Discover</button>
                    </div>
                </div>
                <div>
                    <img src="/media/illustrator/laptop and charts.svg" alt="" />
                </div>
            </div>
        </section>
    )
}

export default Banner