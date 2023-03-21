import Nav from "../../components/nav";
import emailjs from 'emailjs-com'
import React, { useRef } from 'react';
const ContactUs = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9krehvb', 'template_n4kts1h', form.current, '9kaC9PmbSn7PX5bOs')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
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
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="FullName" placeholder="Full Name" />
                    <input type="email" name="email" placeholder="Email" />
                    <input type="tel" placeholder="Phone Number" />
                    <textarea name="message" />
                    <input type="submit" value="Send" />
                </form>
            </div>
        </div>
    )
}

export default ContactUs;