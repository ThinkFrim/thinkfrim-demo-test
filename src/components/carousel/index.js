import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const images = [
    "/media/images/div (3).png",
    "/media/images/div (2).png",
    "/media/images/div.png",
];

function Slideshow() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const goToPreviousSlide = () => {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    };

    const goToNextSlide = () => {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <img
                src={images[currentSlide]}
                alt={`Slide ${currentSlide + 1}`}
                className="rounded-lg shadow-md mb-4"
            />
            <div className="flex justify-center 2xl:hidden md:hidden">
                <button
                    onClick={goToPreviousSlide}
                    className="rounded-full bg-gray-200 p-2 mr-2"
                >
                    &#8249;
                </button>
                <button
                    onClick={goToNextSlide}
                    className="rounded-full bg-gray-200 p-2"
                >
                    &#8250;
                </button>
            </div>
        </div>
    );
}

export default Slideshow;