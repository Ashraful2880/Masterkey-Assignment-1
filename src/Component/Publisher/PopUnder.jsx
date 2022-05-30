import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import adImage from "../../Assets/Images/advertisement.png";

const PopUnder = () => {
    return (
        <div className="container mx-auto">
            <div className="lg:flex block justify-between">
                <div className="lg:w-1/2 w-full">
                    <img src={adImage} alt="adImage" className=" h-80 w-[500px] rounded-md" />
                </div>
                <div className="lg:w-1/2 w-full flex flex-col justify-between items-start">
                    <div>
                        <h4 className="text-2xl text-[#ED6A49] mb-6 text-left uppercase">Pop-Under</h4>
                        <p className="text-left text-xl font-bold tracking-wider">This is one of the most popular ads. After user’s click, this <br /> ad opens landing page in behind. So, the user experience is <br />   not hampered much.</p>
                    </div>
                    <Link to="/home" className="text-xl font-bold text-[#644F9C]">
                        Learn More <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PopUnder;