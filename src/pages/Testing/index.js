import Nav from "../../components/nav";
import { Sling as Hamburger } from 'hamburger-react'
import { useState } from "react";
import { HashLink } from "react-router-hash-link";
const Testing = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className='chineseBlackBg h-[100vh]'>
            <div className="columns-2 py-5">
                <div className="bg-red-600 p-5"></div>
                <div className="bg-red-600 p-5 break"></div>
            </div>
        </div>
    )
}

export default Testing;