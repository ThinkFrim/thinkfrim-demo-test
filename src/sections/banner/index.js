import Nav from "../../components/nav"
import './banner.css'
const Banner = () => {
    return (
        <section id="banner" className="chineseBlackBg h-screen xl:h-screen">
            <Nav />
            <div class="flex flex-col items-center lg:flex-row xl:flex-row">
                <div class="text-center md:text-center lg:text-left lg:w-1/2 xl:w-1/2 lg:pl-10 xl:pl-10">
                    <h1 class="text-2xl White lg:text-3xl xl:text-4xl pb-4 font-semibold lg:leading-[3rem] xl:leading-[3rem]">Transform your online image<br class="hidden md:inline" /> with a professional website</h1>
                    <h2 class="text-2xl White lg:text-2xl xl:text-3xl font-light">Get ahead of the competition <br /> with a custom-built website</h2>
                    <button class="RajahBg w-[45%] 2xl:max-w-[30%] lg:max-w-[50%] xl:max-w-[40%] md:w-[30vw] font-medium text-chineseBlack text-xl p-4 rounded-[16px] mt-5">Discover</button>
                </div>
                <img class="max-w-[60%] lg:w-[50%] xl:w-[40%]  md:w-[50%] mt-5" src="/media/illustrator/laptop and charts (2).svg" alt="" />
            </div>
        </section>

    )
}

export default Banner;



