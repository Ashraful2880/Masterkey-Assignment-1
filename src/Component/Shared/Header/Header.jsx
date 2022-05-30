import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../Assets/Images/Masterkey-Transparent-Logo.png";

const Header = () => {

    return (
        <div className="container mx-auto mb-10">
            <div className="flex justify-between items-center py-5">
                <div>
                    <img className="w-16" src={logo} alt="Main Logo" />
                </div>
                <div>
                    <Link to="/home" className="focus:text-[#03B152]">
                        <span className="text-[#03B152]">BN</span>
                    </Link>
                    <span> / </span>
                    <Link to="/home" className="focus:text-[#03B152]">
                        EN
                    </Link>
                </div>
            </div>
            <nav className="flex justify-between items-center">
                <ul className="flex gap-x-5 uppercase text-xl tracking-wider">
                    <li className="text-[#644F9C] hover:text-[#FF6F00] duration-150">
                        <Link to="/home" className=" focus:text-[#FF6F00]">
                            Home
                        </Link>
                    </li>
                    <li className="text-[#644F9C] hover:text-[#FF6F00] focus:text-[#FF6F00] duration-150">
                        <Link to="/advertisers" className=" focus:text-[#FF6F00]">
                            Advertisers
                        </Link>
                    </li>
                    <li className="text-[#644F9C] hover:text-[#FF6F00] focus:text-[#FF6F00] duration-150">
                        <Link to="/publishers" className=" focus:text-[#FF6F00]">
                            Publishers
                        </Link>
                    </li>
                    <li className="text-[#644F9C] hover:text-[#FF6F00] focus:text-[#FF6F00] duration-150">
                        <Link to="/influencers" className=" focus:text-[#FF6F00]">
                            Influencers
                        </Link>
                    </li>
                    <li className="text-[#644F9C] hover:text-[#FF6F00] focus:text-[#FF6F00] duration-150">
                        <Link to="/formats" className=" focus:text-[#FF6F00]">
                            Ad Formats
                        </Link>
                    </li>
                    <li className="text-[#644F9C] hover:text-[#FF6F00] focus:text-[#FF6F00] duration-150">
                        <Link to="/blog" className=" focus:text-[#FF6F00]">
                            Blog
                        </Link>
                    </li>
                    <li className="text-[#644F9C] hover:text-[#FF6F00] focus:text-[#FF6F00] duration-150">
                        <Link to="/contact" className=" focus:text-[#FF6F00]">
                            Contact Us
                        </Link>
                    </li>
                </ul>
                <div className=" bg-white px-2 py-2 rounded-3xl shadow-xl">
                    <div className="flex uppercase text-md font-semibold">
                        <Link to="/login" className="px-6 py-1.5 rounded-3xl focus:bg-[#FF6F00] focus:text-white" >Login</Link>
                        <Link to="/signup" className="px-6 py-1.5 rounded-3xl focus:bg-[#FF6F00] focus:text-white ">Sign Up</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;