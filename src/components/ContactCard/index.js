import React from 'react'
// import './contactcard.css'
const ContactCard = () => {
    return (
        <div className='chineseBlackBg h-[100vh]'>
            <div className='flex flex-col items-center pt-20'>
                <div className='Box RajahBg max-w-[50%] max-sm:max-w-[100%] sm:max-w-[100%] rounded-[15px] max-sm:p-[2rem] flex items-center justify-between max-sm:justify-center px-15 sm:px-[2rem]'>
                    <h1 className='chineseBlack text-3xl max-sm:text-xl sm:text-xl max-sm:pl-[1rem]'>Do you have Any Project?</h1>
                    <img className='max-sm:hidden sm:w-[15%]' src="/media/illustrator/footerDesing.svg" alt="" />
                    <button className='darkGreenBg White text-2xl max-sm:text-base max-sm:w-[30vw] p-[1rem] sm:w-[30%] rounded-[20px]'>Contact Us</button>
                </div>
            </div>
        </div>
    )
}

export default ContactCard;