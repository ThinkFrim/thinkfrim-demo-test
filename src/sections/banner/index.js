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
                    <h1 className='White text-5xl py-4'>Transform your online image <br /> with a professional website.</h1>
                    <h2 className='White text-3xl py-6'>Get ahead of the competition with <br /> a custom-built website</h2>
                    <div>
                        <button className='americanOrangeBg White text-2xl p-4 bannerButton'>Discover</button>
                    </div>
                </div>
                <div>
                    <img src="/media/illustrator/laptop and charts (2).svg" alt="" />
                </div>
            </div>
        </section>
    )
}

export default Banner



