import Nav from "../../components/nav"
import './banner.css'
const Banner = () => {
    return (
        <section id="banner" className="chineseBlackBg max-sm:h-screen md:h-screen">
            <Nav />
            <div className="flex items-center justify-between max-sm:flex-col mx-[6rem] mt-[2rem]">
                <div className="White max-sm:text-center mb-[1rem]">
                    <h1 className="text-5xl max-sm:text-2xl pb-4 font-semibold leading-[3.5rem] max-sm:w-screen">Transform your online image<br className="hidden md:inline" /> with a professional website</h1>
                    <h2 className="text-3xl max-sm:text-lg font-light">Get ahead of the competition<br /> with a custom-built website</h2>
                    <button className="RajahBg chineseBlack text-xl p-[1rem] rounded-[16px] mt-5">Discover</button>
                </div>
                <img className="max-sm:max-w-[70vw]" src="/media/illustrator/laptop and charts (2).svg" alt="" />
            </div>
        </section>

    )
}

export default Banner;



