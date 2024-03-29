import Nav from "../../components/nav"
import './banner.css'
const Banner = () => {
    return (
        <section id='banner' className='root chineseBlackBg px-6'>
            <div className="py-5">
                <Nav />
            </div>
            <div className='md:container flex max-sm:flex-col items-center justify-between mx-20 py-24'>
                <div className='content'>
                    <h1 className='White text-5xl max-sm:text-center max-sm:text-3xl py-4'>Transform your online image <br /> with a professional website.</h1>
                    <h2 className='White text-3xl  max-sm:text-center max-sm:text-lg py-6'>Get ahead of the competition with <br /> a custom-built website</h2>
                    <div>
                        <button className='RajahBg max-sm:text-sm chineseBlack text-2xl p-4 bannerButton'>Discover</button>
                    </div>
                </div>
                <div>
                    <img src="/media/illustrator/laptop and charts (2).svg" className=" max-sm:w-40" alt="" />
                </div>
            </div>
        </section>
    )
}

export default Banner



