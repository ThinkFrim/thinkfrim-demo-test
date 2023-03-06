import Nav from "../../components/nav"
import './banner.css'
const Banner = () => {
    return (
        <section id='banner' className='root chineseBlackBg px-6'>
            <Nav />
            <div className='flex max-sm:flex-col max-md:flex-col max-md:justify-center items-center justify-between mx-20 py-24'>
                <div className="max-sm:flex max-sm:flex-col max-sm:justify-center">
                    <div className="max-sm:w-[100vw]">
                        <h1 className='White text-5xl max-sm:text-[25px] max-sm:text-center max-sm:leading-[2rem] py-5'>Transform your online image <br /> with a professional website.</h1>
                        <h2 className='White text-3xl max-sm:text-[16px] max-sm:text-center py-5'>Get ahead of the competition with <br /> a custom-built website</h2>
                    </div>
                    <button className='RajahBg max-sm:text-lg chineseBlack text-2xl p-4 bannerButton max-sm:item block max-sm:mx-auto max-sm:max-w-xs'>Discover</button>
                </div>
                <div>
                    <img  src="/media/illustrator/laptop and charts (2).svg" alt="" />
                </div>
            </div>
        </section>
    )
}

export default Banner;



