import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../Assets/Images/Masterkey-Transparent-Logo.png";

const Footer = () => {
    return (
        <footer className="text-center lg:text-left pt-10" >
            <div className="container mx-auto">
                <div className="mx-6 py-10 text-center md:text-left">
                    <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="mx-auto">
                            <h6 className="text-2xl mb-4 flex justify-center md:justify-start text-[#644F9C]">
                                We are Social
                            </h6>
                            <h6 className="text-3xl mb-4">Follow Us</h6>
                            <div className="mt-6 mb-10">
                                <FontAwesomeIcon icon={faInstagram} className="bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-yellow-500 hover:to-pink-500 text-white p-2 h-6 w-6 rounded-full border border-pink-500 duration-200 mr-2" />
                                <FontAwesomeIcon icon={faFacebook} className="bg-[#3B5998] text-white p-2 h-6 w-6 rounded-full border border-[#3B5998] hover:bg-transparent hover:text-[#3B5998] duration-200 mx-2" />
                                <FontAwesomeIcon icon={faYoutube} className="bg-[#FF0000] text-white p-2 h-6 w-6 rounded-full border border-[#FF0000] hover:bg-transparent hover:text-[#FF0000] duration-200 mx-2" />
                            </div>
                            <img className="w-24" src={logo} alt="Main logo" />

                        </div>
                        <div className="mx-auto">
                            <h6 className="text-2xl mb-4 flex justify-center md:justify-start text-[#644F9C]">
                                Links
                            </h6>
                            <p className="mb-6 text-2xl font-bold hover:text-[#644F9C]">
                                <Link to="/advisers"> ADVERTISERS </Link>
                            </p>
                            <p className="mb-6 text-2xl font-bold hover:text-[#644F9C]">
                                <Link to="/publisher"> PUBLISHERS </Link>
                            </p>
                            <p className="mb-6 text-2xl font-bold hover:text-[#644F9C]">
                                <Link to="/influencer"> INFLUENCERS </Link>
                            </p>
                            <p className="mb-6 text-2xl font-bold hover:text-[#644F9C]">
                                <Link to="/format"> AD FORMATS </Link>
                            </p>
                        </div>
                        <div className="mx-auto">
                            <h6 className="text-2xl mb-4 flex justify-center md:justify-start text-[#644F9C]">
                                Documentation
                            </h6>
                            <p className="mb-6 text-2xl font-bold hover:text-[#644F9C]">
                                <Link to="/advisers"> TERMS & CONDITIONS </Link>
                            </p>
                            <p className="mb-6 text-2xl font-bold hover:text-[#644F9C]">
                                <Link to="/publisher"> PRIVACY POLICY </Link>
                            </p>
                            <p className="mb-6 text-2xl font-bold hover:text-[#644F9C]">
                                <Link to="/influencer"> CANCELLATION POLICY </Link>
                            </p>
                            <p className="mb-6 text-2xl font-bold hover:text-[#644F9C]">
                                <Link to="/format"> BLOG </Link>
                            </p>
                        </div>
                        <div className="mx-auto">
                            <h6 className="text-2xl mb-4 flex justify-center md:justify-start text-[#644F9C]">
                                Support
                            </h6>
                            <p className="mb-6 text-2xl hover:text-[#644F9C]">
                                <Link to="/publisher"> FAQ </Link>
                            </p>
                            <p className="mb-6 text-2xl hover:text-[#644F9C]">
                                <Link to="/influencer"> MEDIA KIT </Link>
                            </p>
                            <p className="mb-6 text-2xl hover:text-[#644F9C]">
                                <Link to="/format"> CONTACT US </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;