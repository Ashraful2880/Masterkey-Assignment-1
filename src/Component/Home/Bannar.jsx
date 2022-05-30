import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Bannar = () => {
    const slider = React.useRef(null);
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        autoplay: true,
        fade: true,
        speed: 700,
        autoplaySpeed: 3000,
        cssEase: "linear",
        swipeToSlide: true,
        arrows: false
    };
    return (
        <div className="mb-6">
            <Slider ref={slider} {...settings}>
                <div className="relative">
                    <img className="w-full h-[63vh]" src="https://res.cloudinary.com/ashraful-islam/image/upload/v1653316801/Assesment/banner4_c08sk8.png" alt="Bannar Slider" />
                    <div className="bg-[#00000063] h-full w-full absolute top-0 left-0"></div>
                    <div className="absolute top-[22%] left-[20%] text-left">
                        <h1 className="text-6xl font-bold text-white"> Get The Best Service </h1>
                        <h1 className="text-6xl font-bold text-white mb-5">From Us</h1>
                        <p className="w-2/5 text-white text-lg mb-6">Sed Elit Quam, Iaculis The Sed Semper Sit Amet The Udin Vitae Nibh At Magna Akal Semper Sema Olatiup Sema Olatiup Iaculis The Sed Semper Sit Amet The Udin Vitae Nibh</p>
                        <button className="text-white text-xl border border-[#FF6F00] px-5 py-3 rounded-md bg-[#FF6F00] hover:bg-transparent duration-200">Get Started</button>
                    </div>
                </div>
                <div className="relative">
                    <img src="https://res.cloudinary.com/ashraful-islam/image/upload/v1652967874/Assesment/Bannar-4_lpzwnx.png" alt="Bannar Slider" />
                    <div className="bg-[#00000063] h-full w-full absolute top-0 left-0"></div>
                    <div className="absolute top-[22%] left-[20%] text-left">
                        <h1 className="text-6xl font-bold text-white"> Get The Best Service </h1>
                        <h1 className="text-6xl font-bold text-white mb-5">From Us</h1>
                        <p className="w-2/5 text-white text-lg mb-6">Sed Elit Quam, Iaculis The Sed Semper Sit Amet The Udin Vitae Nibh At Magna Akal Semper Sema Olatiup Sema Olatiup Iaculis The Sed Semper Sit Amet The Udin Vitae Nibh</p>
                        <button className="text-white text-xl border border-[#FF6F00] px-5 py-3 rounded-md bg-[#FF6F00] hover:bg-transparent duration-200">Get Started</button>
                    </div>
                </div>
                <div className="relative">
                    <img src="https://res.cloudinary.com/ashraful-islam/image/upload/v1652967872/Assesment/Bannar-3_g9et0z.jpg" alt="Bannar Slider" />
                    <div className="bg-[#00000063] h-full w-full absolute top-0 left-0"></div>
                    <div className="absolute top-[22%] left-[20%] text-left">
                        <h1 className="text-6xl font-bold text-white"> Get The Best Service </h1>
                        <h1 className="text-6xl font-bold text-white mb-5">From Us</h1>
                        <p className="w-2/5 text-white text-lg mb-6">Sed Elit Quam, Iaculis The Sed Semper Sit Amet The Udin Vitae Nibh At Magna Akal Semper Sema Olatiup Sema Olatiup Iaculis The Sed Semper Sit Amet The Udin Vitae Nibh</p>
                        <button className="text-white text-xl border border-[#FF6F00] px-5 py-3 rounded-md bg-[#FF6F00] hover:bg-transparent duration-200">Get Started</button>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default Bannar;