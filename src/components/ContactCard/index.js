import React from 'react'
import './contactcard.css'
const ContactCard = () => {
    return (
        <div className='chineseBlackBg h-[100vh]'>
            <div className='flex flex-col items-center pt-20'>
                <div className='Box RajahBg w-1/2 max-sm:w-[100vw] max-sm:p-[3rem] flex items-center justify-between max-sm:justify-center px-14'>
                    <h1 className='chineseBlack text-3xl max-sm:text-xl'>Do you have Any Project?</h1>
                    <img className='max-sm:hidden' src="/media/illustrator/footerDesing.svg" alt="" />
                    <button className='contactUsBtn darkGreenBg White text-2xl max-sm:text-xl max-sm:w-[50vw] '>Contact Us</button>
                </div>
            </div>
        </div>
    )
}

export default ContactCard;