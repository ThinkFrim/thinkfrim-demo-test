import Nav from "../../components/nav";
import emailjs from 'emailjs-com'
import PhoneInput from 'react-phone-number-input';
import React, { useRef, useState } from 'react';
import './contact.css'
import 'react-phone-number-input/style.css';
const ContactUs = () => {
    const [phone, setPhone] = useState('')
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_9krehvb', 'template_n4kts1h', form.current, '9kaC9PmbSn7PX5bOs')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        // e.target.reset();
    }
    return (
        <div className="chineseBlackBg h-[100vh]">
            <Nav />
            <div className="grid grid-cols-2">
                <div className="RaisinBlackBg relative overflow-hidden h-[100%] w-[55%] ml-6">
                    <h1 className="White font-bold text-2xl px-[1rem] mt-[1.5rem]">Contact us:</h1>
                    <div className="absolute top-[16vh]">
                        <img className="px-4" src="/media/illustrator/dotts.svg" alt="" />
                    </div>
                    <div className="pt-[4rem] px-[1.5rem]">
                        <h1 className="White font-bold text-[4rem]">Let's Work <br /> Together</h1>
                        <p className="White font-light text-[20px]">Like What you see? <br /> Send us a message to get in touch!</p>
                    </div>
                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <div>
                        <h1 className="White text-2xl mb-3">Contact Info</h1>
                        <div className="flex flex-col w-4/6 mb-16">
                            <input type="text" name="FullName" required placeholder="Full Name" className="mb-4 chineseBlackBg border-[1px] border-borderGrey  p-2 text-white px-4" />
                            <input type="text" name="email" required placeholder="Email" className="mb-4 chineseBlackBg border-[1px] border-white  p-2 text-white px-4" />
                            <PhoneInput placeholder="Phone Number" required labels="lb" value={phone} onChange={setPhone} name="PhoneNumber" />
                        </div>
                        <div className="mb-24">
                            <h1 className="White text-2xl mb-3">Budget Range</h1>
                            <input type="text" placeholder="Budget" required name="Budget" className="w-4/6 mb-4 chineseBlackBg border-[1px] border-borderGrey  p-2 text-white px-4" />
                        </div>

                        <div>
                            <h1 className="White text-2xl mb-3">Message</h1>
                            <textarea name="Message" placeholder="Message" className="w-4/6 mb-4 chineseBlackBg border-[1px] border-borderGrey  p-2 text-white px-4" ></textarea>
                        </div>
                        <div>
                            <button className="text-white desertBg  p-1" type="submit">send now</button>
                        </div>
                    </div>
                </form>

                {/* <input type="submit" value="Send" /> */}
                {/* <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="FullName" placeholder="Full Name" />
                    <input type="email" name="email" placeholder="Email" />
                    <PhoneInput
                        placeholder="phone number"
                        labels={lb}
                        value={phone}
                        onChange={setPhone}
                    />

                    
                </form> */}
            </div>
        </div>
    )
}

export default ContactUs;