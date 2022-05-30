import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../Assets/Images/Masterkey-Transparent-Logo.png";

const Header = () => {

    return (
        <div className="container mx-auto">
            <div className="flex justify-between items-center py-5">
                <div>
                    <img className="w-16" src={logo} alt="Main Logo" />
                </div>
                <div>
                    <Link to="/home">
                        <span className="text-[#03B152]">BN</span>
                    </Link>
                    <span> / </span>
                    <Link to="/home">
                        EN
                    </Link>
                </div>
            </div>
            <nav className="flex justify-between items-center">
                <ul className="flex gap-x-5 uppercase">
                    <li>
                        <Link to="/home">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/advertisers">
                            Advertisers
                        </Link>
                    </li>
                    <li>
                        <Link to="/publishers">
                            Publishers
                        </Link>
                    </li>
                    <li>
                        <Link to="/influencers">
                            Influencers
                        </Link>
                    </li>
                    <li>
                        <Link to="/formats">
                            Ad Formats
                        </Link>
                    </li>
                    <li>
                        <Link to="/blog">
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            Contact Us
                        </Link>
                    </li>
                </ul>
                <div className="flex gap-x-4">
                    <p>
                        <Link to="/login">Login</Link>
                    </p>
                    <p>
                        <Link to="/signup">Sign Up</Link>
                    </p>
                </div>
            </nav>
        </div>
    );
};

export default Header;