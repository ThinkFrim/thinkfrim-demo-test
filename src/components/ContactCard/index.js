import React from 'react'
import './contactcard.css'
const ContactCard = () => {
    return (
        <div className='chineseBlackBg h-[100vh]'>
            <div className='flex flex-col items-center pt-20'>
                <div className='Box RajahBg w-1/2 flex items-center justify-between  px-14'>
                    <h1 className='chineseBlack text-3xl'>Do you have Any Project?</h1>
                    <img src="/media/illustrator/footerDesing.svg" alt="" />
                    <button className='contactUsBtn darkGreenBg White text-2xl'>Contact Us</button>
                </div>
            </div>
        </div>
    )
}

export default ContactCard;