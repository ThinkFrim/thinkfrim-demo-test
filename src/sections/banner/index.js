import Nav from "../../components/nav"
import './banner.css'
const Banner = () => {
    return (
        <section id="banner" className="chineseBlackBg max-sm:h-screen">
            <Nav />
            <div className="flex max-sm:flex-col">
                <div className="max-sm:text-center max-sm:mt-5">
                    <h1 className="White font-medium max-sm:text-[1.5rem]">Transform your online image <br className="block" /> with a professional website</h1>
                    <h2 className="White font-light max-sm:text-[1.2rem] max-sm:mt-[10px]">Get ahead of the competition <br /> with a custom-built website</h2>
                    <div className="max-sm:order-first">
                        <button className="RajahBg max-sm:text-[1.2rem] max-sm:mt-[10px] p-[15px] w-[50%] rounded-[15px]">Discover</button>
                    </div>
                </div>
                <div className="max-sm:order-last">
                    <img className="max-sm:order-2 max-sm:object-cover" src='/media/illustrator/laptop and charts (2).svg' alt="" />
                </div>
            </div>
        </section>

    )
}
{/* <section id="banner" className="chineseBlackBg h-screen max-sm:h-full">
    <Nav />
    <div className="flex justify-between items-center mx-[7rem] max-sm:flex-col xl:flex-col max-sm:items-center mt-[5rem]">
        <div className="">
            <h1 className="White text-[3rem] leading-[3.5rem] max-sm:text-[2rem] mb-6">Transform your online image <br className="block" /> with a professional website</h1>
            <h2 className="White text-[1.5rem] leading-[2.5rem] font-light text-lg sm:text-[2rem] xl:text-[2rem] mb-5">Get ahead of the competition <br /> with a custom-built website</h2>
            <button className="RajahBg rounded-[20px] px-[5rem] py-4 text-xl max-sm:text-2xl">Discover</button>
        </div>
        <img className="max-w-[90%] mb-8 max-sm:order-last sm:mb-0 sm:object-cover" src="/media/illustrator/laptop and charts (2).svg" alt="" />
    </div>
</section> */}
export default Banner;



