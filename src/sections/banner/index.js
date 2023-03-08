import Nav from "../../components/nav"
import './banner.css'
const Banner = () => {
    return (
        <section id='banner' className='chineseBlackBg h-[100vh]'>
            <Nav />
            <div className='flex max-sm:flex-col max-md:flex-co max-2xl:flex-col items-center justify-between mx-20 max-sm:py-[2vh] max-md:mb-[5vh] py-24'>
                <div className="max-sm:flex max-sm:flex-col max-sm:justify-center max-2xl:justify-center max-sm:order-first max-md:order-first">
                    <div className="max-sm:w-[100vw] max-md:w-[100vw] max-xl:w-[100vw]">
                        <h1 className='White text-5xl max-lg:text-[2rem] max-sm:text-[25px] max-sm:text-center max-md:text-center max-md:leading-[2.5rem] max-sm:leading-[2.5rem] leading-[3.5rem] py-3'>Transform your online image <br /> with a professional website</h1>
                        <h2 className='White text-3xl font-light max-sm:text-[20px] max-sm:text-center  max-md:text-center max-md:text-[1.3rem]  max-md:leading-[1.5rem] max-sm:leading-[2rem] leading-[2.5rem] pb-4'>Get ahead of the competition with a  <br />custom-built website</h2>
                        <button className='max-sm:hidden max-md:hidden RajahBg rounded-[15px] font-semibold darkDeepGreen min-w-[40%] chineseBlack text-2xl p-3 max-sm:item block max-sm:mx-auto max-sm:max-w-xs'>Discover</button>
                    </div>
                </div>
                <div className="max-sm:order-last max-md:order-last">
                    <img className="max-sm:pb-[2rem] max-sm:max-w-[70vw] max-md:max-w-[50vw]" src="/media/illustrator/laptop and charts (2).svg" alt="" />
                    <button className='2xl:hidden RajahBg md:hidden rounded-[15px] font-semibold darkDeepGreen min-w-[70%] max-sm:text-lg chineseBlack text-2xl max-sm:p-3  max-sm:item block max-sm:mx-auto max-md:p-3 max-md:mx-auto max-md:max-w-xs'>Discover</button>
                </div>
            </div>
        </section>
    )
}

export default Banner;



