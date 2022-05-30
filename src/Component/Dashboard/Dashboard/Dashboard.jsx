import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import BannarAd from '../BannarAd/BannarAd';
import Native from '../Native/Native';
import PopUnder from '../PopUnder/PopUnder';
import Skim from '../Skim/Skim';

const Dashboard = () => {
    return (
        <div className="container mx-auto my-10">
            <h2 className="text-3xl text-[#644F9C] uppercase mb-10">VERSATILE AD FORMATS</h2>
            <main className="px-20">
                <div className="grid grid-cols-4 gap-x-32 mb-10">
                    <Link
                        to="/dashboard"
                        className="text-xl uppercase bg-[#F2F2F2] p-2 rounded-3xl mt-2 cursor-pointer hover:bg-[#ED6A49] hover:text-white focus:bg-[#ED6A49] focus:text-white w-full block shadow-xl duration-200">
                        Pop-Under
                    </Link>
                    <Link
                        to="bannarAd"
                        className="text-xl uppercase bg-[#F2F2F2] p-2 rounded-3xl mt-2 cursor-pointer hover:bg-[#ED6A49] hover:text-white focus:bg-[#ED6A49] focus:text-white w-full block shadow-xl duration-200">
                        Banner Ad
                    </Link>
                    <Link
                        to="native"
                        className="text-xl uppercase bg-[#F2F2F2] p-2 rounded-3xl mt-2 cursor-pointer hover:bg-[#ED6A49] hover:text-white focus:bg-[#ED6A49] focus:text-white w-full block shadow-xl duration-200">
                        Native
                    </Link>
                    <Link
                        to="skim"
                        className="text-xl uppercase bg-[#F2F2F2] p-2 rounded-3xl mt-2 cursor-pointer hover:bg-[#ED6A49] hover:text-white focus:bg-[#ED6A49] focus:text-white w-full block shadow-xl duration-200">
                        Skim
                    </Link>
                </div>
                <section className="w-full">
                    <Routes>
                        <Route path="/" element={<PopUnder />} />
                        <Route path="bannarAd" element={<BannarAd />} />
                        <Route path="native" element={<Native />} />
                        <Route path="skim" element={<Skim />} />
                    </Routes>
                </section>
            </main >
        </div>
    );
};

export default Dashboard;