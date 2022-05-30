import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="container mx-auto h-[85vh]">
            <div className="flex items-center justify-center pt-12 pb-20">
                <div className=" flex items-center justify-center">
                    <div>
                        <img
                            className="px-4"
                            src="https://i.ibb.co/ThGcj8s/404.png"
                            alt="NotFound" />
                        <h1 className="px-4 py-8 text-center text-5xl font-bold leading-10 text-gray-800"> OOPS! </h1>
                        <p className="px-4 pb-10 text-lg leading-none text-center text-gray-600">We Cannot Find The Page You Are Looking For </p>
                        <button
                            className="mx-4 py-3 px-6 rounded-md text-white hover:text-indigo-800 text-base bg-indigo-700 hover:bg-transparent border border-indigo-700 duration-200">
                            <Link to="/home"> Go Back </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;