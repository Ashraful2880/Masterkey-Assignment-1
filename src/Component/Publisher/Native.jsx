import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import nativeImage from '../../Assets/Images/advertisement-4.png';

const Native = () => {
    return (
        <div className="container mx-auto">
            <div className="lg:flex block justify-between">
                <div className="lg:w-1/2 w-full">
                    <img src={nativeImage} alt="adImage" className=" h-80 w-[500px] rounded-md" />
                </div>
                <div className="lg:w-1/2 w-full flex flex-col justify-between items-start">
                    <div>
                        <h4 className="text-2xl text-[#ED6A49] mb-6 text-left uppercase">NATIVE</h4>
                        <p className="text-left text-xl font-bold tracking-wider">Ad format with the image and the title, that perfectly fits into<br />the content of the site. <br /> ad opens landing page in behind. So, the user experience is <br /> Native ads are placed in the most visible areas of the page <br /> and, thus, this format shows good results and the level of <br />interaction. </p>
                    </div>
                    <Link to="/home" className="text-xl font-bold text-[#644F9C]">
                        Learn More <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Native;