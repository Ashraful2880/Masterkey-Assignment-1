import React from 'react';

const About = () => {
    return (
        <div className="bg-[#644F9C]">
            <div className="container mx-auto">
                <h2 className="text-3xl text-white pt-10">Title Here</h2>
                <div className="lg:flex block justify-between items-center py-16">
                    <div className="text-white border-2 border-dashed rounded-full h-72 w-72 flex flex-col justify-center items-center">
                        <h1 className="text-5xl">1 BN+</h1>
                        <h4 className="text-2xl">Daily Impressions</h4>
                    </div>
                    <div className="text-[#644F9C] font-bold bg-white rounded-full h-72 w-72 flex flex-col justify-center items-center">
                        <h1 className="text-5xl">$500K+</h1>
                        <h4 className="text-2xl mt-6">Paid</h4>
                    </div>
                    <div className="text-white font-bold bg-[#FF6F00] rounded-full h-72 w-72 flex flex-col justify-center items-center">
                        <h1 className="text-5xl mb-6">8K+</h1>
                        <h4 className="text-2xl">Global Publishers</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;