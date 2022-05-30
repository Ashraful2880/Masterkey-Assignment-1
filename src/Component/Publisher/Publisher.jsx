import React, { useState } from 'react';
import PopUnder from './PopUnder';
import BannarAd from './BannarAd';
import Native from './Native';
import Skim from './Skim';

const Publisher = () => {
    const [active, setActive] = useState("Pop-Under");
    return (
        <div className="container mx-auto my-10">
            <h2 className="text-3xl text-[#644F9C] uppercase mb-10">VERSATILE AD FORMATS</h2>
            <div className="px-20">
                <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-x-32 gap-x-11 mb-10">
                    <button
                        onClick={() => setActive("Pop-Under")}
                        className={`text-xl uppercase bg-[#F2F2F2] p-2 rounded-3xl mt-2 cursor-pointer hover:bg-[#ED6A49] hover:text-white ${active === "Pop-Under" && `bg-[#ED6A49] text-white`} w-full block shadow-xl duration-200`}>
                        Pop-Under
                    </button>
                    <button
                        onClick={() => setActive("BannarAd")}
                        className={`text-xl uppercase bg-[#F2F2F2] p-2 rounded-3xl mt-2 cursor-pointer hover:bg-[#ED6A49] hover:text-white ${active === "BannarAd" && `bg-[#ED6A49] text-white`} w-full block shadow-xl duration-200`}>
                        Banner Ad
                    </button>
                    <button
                        onClick={() => setActive("Native")}
                        className={`text-xl uppercase bg-[#F2F2F2] p-2 rounded-3xl mt-2 cursor-pointer hover:bg-[#ED6A49] hover:text-white ${active === "Native" && `bg-[#ED6A49] text-white`} w-full block shadow-xl duration-200`}>
                        Native
                    </button>
                    <button
                        onClick={() => setActive("Skim")}
                        className={`text-xl uppercase bg-[#F2F2F2] p-2 rounded-3xl mt-2 cursor-pointer hover:bg-[#ED6A49] hover:text-white ${active === "Skim" && `bg-[#ED6A49] text-white`} w-full block shadow-xl duration-200`}>
                        Skim
                    </button>
                </div>
            </div >
            <div>
                {active === "Pop-Under" && <PopUnder />}
                {active === "BannarAd" && <BannarAd />}
                {active === "Native" && <Native />}
                {active === "Skim" && <Skim />}
            </div>
        </div>
    );
};

export default Publisher;