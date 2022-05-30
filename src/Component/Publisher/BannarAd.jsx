import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import banarAd from "../../Assets/Images/advertisement-2.png";

const BannarAd = () => {
    return (
        <div className="container mx-auto">
            <div className="lg:flex block justify-between">
                <div className="lg:w-1/2 w-full">
                    <img src={banarAd} alt="adImage" className=" h-80 w-[500px] rounded-md" />
                </div>
                <div className="lg:w-1/2 w-full flex flex-col justify-between items-start">
                    <div>
                        <h4 className="text-2xl text-[#ED6A49] mb-6 text-left uppercase">BANNER AD</h4>
                        <p className="text-left text-xl font-bold tracking-wider">Choose between the available banner formats. Highly <br /> effective ad for visibility.</p>
                    </div>
                    <Link to="/home" className="text-xl font-bold text-[#644F9C]">
                        Learn More <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BannarAd;