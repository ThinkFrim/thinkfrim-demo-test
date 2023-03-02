import Nav from "../../components/nav";


const ContactUs = () => {
    return (
        <div className="chineseBlackBg h-[100vh]">
            <Nav />
            <div>
                <div className="RaisinBlackBg relative overflow-hidden h-[75vh] w-[25vw] ml-6">
                    <h1 className="White font-bold text-2xl px-[1rem] mt-[1.5rem]">Contact us:</h1>
                    <div className="absolute top-[16vh]">
                        <img src="/media/illustrator/dotts.svg" alt="" />
                    </div>
                    <div className="pt-[4rem] px-[1.5rem]">
                        <h1 className="White font-bold text-[4rem]">Let's Work <br /> Together</h1>
                        <p className="White font-light text-[20px]">Like What you see? <br /> Send us a message to get in touch!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;