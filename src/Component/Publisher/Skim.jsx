import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import skimImage from "../../Assets/Images/advertisement.png";

const Skim = () => {
    return (
        <div className="container mx-auto">
            <div className="lg:flex block justify-between">
                <div className="lg:w-1/2 w-full">
                    <img src={skimImage} alt="adImage" className=" h-80 w-[500px] rounded-md" />
                </div>
                <div className="lg:w-1/2 w-full flex flex-col justify-between items-start">
                    <div>
                        <h4 className="text-2xl text-[#ED6A49] mb-6 text-left uppercase">Skim</h4>
                        <p className="text-left text-xl font-bold tracking-wider">SKIM" is a link that a publisher inserts on a specific site <br />element, and after clicking on it, an advertisement appears <br /> to the user. <br /> SKIM gives 100% control of your sold traffic amount, higher <br /> CR to advertisers and CPM rates to publishers.</p>
                    </div>
                    <Link to="/home" className="text-xl font-bold text-[#644F9C]">
                        Learn More <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Skim;