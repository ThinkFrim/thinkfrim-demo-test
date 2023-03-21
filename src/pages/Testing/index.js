import React, { useState } from 'react'
// import Slideshow from '../../components/carousel';
// import CarouselService from '../../components/carousel';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import lb from 'react-phone-number-input/locale/ru'
const Testing = () => {
    const [phone, setPhone] = useState('');
    return (
        <div className='flex justify-center chineseBlackBg h-[100vh]'>
            <PhoneInput
                placeholder="phone number"
                labels={lb}
                value={phone}
                onChange={setPhone}
            />
        </div>
    )
}

export default Testing;