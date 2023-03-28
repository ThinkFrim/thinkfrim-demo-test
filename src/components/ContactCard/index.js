import React from 'react'
// import './contactcard.css'
const ContactCard = () => {
    return (
        <div className='chineseBlackBg xl:h-[100vh]'>
            <div className="flex justify-center pt-20">
                <div className='RajahBg p-[3rem] xl:p-[4rem] min-w-[35%] rounded-[15px] max-sm:p-[1rem]'>
                    <div className='flex items-center justify-between'>
                        <h1 className='text-3xl  pr-5 w-full max-sm:text-xl'>Do you have Any Project?</h1>
                        <button className='darkGreenBg w-[35%] p-[0.9rem] White rounded-[15px] max-sm:p-[0.5rem] max-sm:w-[100%] max-sm:text-sm'>Contact us</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactCard;