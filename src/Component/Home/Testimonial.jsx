import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
    const slider = React.useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 700,
        autoplaySpeed: 3000,
        cssEase: "linear",
        swipeToSlide: true,
        arrows: true,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    adaptiveHeight: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight: true,
                },
            },
        ],
    };
    return (
        <div className="container mx-auto my-12 w-2/3">
            <Slider ref={slider} {...settings}>
                <div className="bg-white shadow-xl p-3 rounded-lg m-5 max-w-lg">
                    <div className="p-2 border border-[#FF6F00] rounded-lg">
                        <div className="flex justify-evenly  w-full">
                            <img className="w-1/2 h-[210px] rounded-md" src="https://res.cloudinary.com/ashraful-islam/image/upload/v1652899086/Assesment/events-6_bbxjg4.webp" alt="Slider 1" />
                            <div className="text-left text-xl font-bold text-[#644F9C] w-1/2 ml-5 mt-4">
                                <h4 className="mb-6">Title 1</h4>
                                <h4>Hello Here will be a text</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow-xl p-3 rounded-lg m-5 max-w-lg">
                    <div className="p-2 border border-[#FF6F00] rounded-lg">
                        <div className="flex justify-evenly  w-full">
                            <img className="w-1/2 h-[210px] rounded-md" src="https://res.cloudinary.com/ashraful-islam/image/upload/v1652899063/Assesment/events-3_wded4b.webp" alt="Slider 1" />
                            <div className="text-left text-xl font-bold text-[#644F9C] w-1/2 ml-5 mt-4">
                                <h4 className="mb-6">Title 2</h4>
                                <h4>Hello Here will be a text</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow-xl p-3 rounded-lg m-5 max-w-lg">
                    <div className="p-2 border border-[#FF6F00] rounded-lg">
                        <div className="flex justify-evenly  w-full">
                            <img className="w-1/2 h-[210px] rounded-md" src="https://res.cloudinary.com/ashraful-islam/image/upload/v1652899062/Assesment/events-5_rnkglq.webp" alt="Slider 1" />
                            <div className="text-left text-xl font-bold text-[#644F9C] w-1/2 ml-5 mt-4">
                                <h4 className="mb-6">Title 3</h4>
                                <h4>Hello Here will be a text</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow-xl p-3 rounded-lg m-5 max-w-lg">
                    <div className="p-2 border border-[#FF6F00] rounded-lg">
                        <div className="flex justify-evenly  w-full">
                            <img className="w-1/2 h-[210px] rounded-md" src="https://res.cloudinary.com/ashraful-islam/image/upload/v1652899062/Assesment/events-4_d2s1s5.webp" alt="Slider 1" />
                            <div className="text-left text-xl font-bold text-[#644F9C] w-1/2 ml-5 mt-4">
                                <h4 className="mb-6">Title 4</h4>
                                <h4>Hello Here will be a text</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow-xl p-3 rounded-lg m-5 max-w-lg">
                    <div className="p-2 border border-[#FF6F00] rounded-lg">
                        <div className="flex justify-evenly  w-full">
                            <img className="w-1/2 h-[210px] rounded-md" src="https://res.cloudinary.com/ashraful-islam/image/upload/v1652899062/Assesment/events-2_krrdpj.webp" alt="Slider 1" />
                            <div className="text-left text-xl font-bold text-[#644F9C] w-1/2 ml-5 mt-4">
                                <h4 className="mb-6">Title 5</h4>
                                <h4>Hello Here will be a text</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default Testimonial;