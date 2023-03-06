import Nav from "../../components/nav"
import './banner.css'
const Banner = () => {
    return (
        <section id='banner' className=' chineseBlackBg h-[100vh] px-6'>
            <Nav />
            <div className='flex max-sm:flex-col max-md:flex-col max-md:justify-center items-center justify-between mx-20 max-sm:py-12 py-24'>
                <div className="max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:order-first">
                    <div className="max-sm:w-[100vw]">
                        <h1 className='White text-5xl max-sm:text-[25px] max-sm:text-center max-sm:leading-[2.5rem] max-sm:py-2 py-5'>Transform your online image <br /> with a professional website.</h1>
                        <h2 className='White text-3xl max-sm:text-[20px] max-sm:text-center max-sm:leading-[2rem] max-sm:py-3 py-5'>Get ahead of the competition with <br /> a custom-built website</h2>
                        <button className='max-sm:hidden RajahBg rounded-[15px] font-medium darkDeepGreen min-w-[40%] max-sm:text-lg  chineseBlack text-2xl p-4 max-sm:item block max-sm:mx-auto max-sm:max-w-xs'>Discover</button>
                    </div>
                </div>
                <div className="max-sm:order-last">
                    <img className="max-sm:pb-[2rem] max-sm:max-w-[70vw]" src="/media/illustrator/laptop and charts (2).svg" alt="" />
                    <button className='2xl:hidden RajahBg rounded-[15px] font-medium darkDeepGreen min-w-[60%] max-sm:text-lg  chineseBlack text-2xl max-sm:p-3 p-4 max-sm:item block max-sm:mx-auto max-sm:max-w-xs'>Discover</button>
                </div>
            </div>
        </section>
    )
}

export default Banner;



