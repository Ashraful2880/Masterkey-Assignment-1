import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Advertiser = () => {
    return (
        <div className="container mx-auto">
            <div>
                <h1 className="text-4xl text-[#644F9C] mb-4">AVAILABLE FOR EVERYONE</h1>
                <h2 className="text-2xl font-bold text-gray-700">Sub Heading</h2>
            </div>
            <div className="grid grid-cols-3 mt-20 mb-4">
                <div>
                    <FontAwesomeIcon icon={faBullhorn} className="text-7xl text-[#1D4999] bg-white p-12 rounded-full shadow-md" />
                    <h3 className="my-5 text-2xl font-bold">Text 1</h3>
                    <button className="w-72 bg-[#644F9C] px-10 py-2 text-2xl text-white  hover:text-[#644F9C] rounded-3xl border border-[#644F9C] hover:bg-transparent duration-200">
                        Hello 1
                    </button>
                </div>
                <div>
                    <FontAwesomeIcon icon={faPaperPlane} className="text-7xl text-[#1D4999] bg-white p-12 rounded-full shadow-md" />
                    <h3 className="my-5 text-2xl font-bold">Text 1</h3>
                    <button className="w-72 bg-[#644F9C] px-10 py-2 text-2xl text-white  hover:text-[#644F9C] rounded-3xl border border-[#644F9C] hover:bg-transparent duration-200">
                        Hello 1
                    </button>
                </div>
                <div>
                    <FontAwesomeIcon icon={faBullhorn} className="text-7xl text-[#1D4999] bg-white p-12 rounded-full shadow-md" />
                    <h3 className="my-5 text-2xl font-bold">Text 1</h3>
                    <button className="w-72 bg-[#644F9C] px-10 py-2 text-2xl text-white  hover:text-[#644F9C] rounded-3xl border border-[#644F9C] hover:bg-transparent duration-200">
                        Hello 1
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Advertiser;