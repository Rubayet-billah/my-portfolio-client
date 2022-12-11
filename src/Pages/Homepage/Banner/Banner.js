import React from 'react';
import bannerImg from '../../../assets/bannerImg/portfolioProfile.png'

const Banner = () => {
    return (
        <div>
            <div className="flex items-center justify-center min-h-[70vh]">
                <div className="lg:flex flex-row-reverse items-center justify-around w-full">
                    <div data-aos="fade-left" className='lg:ml-18'>
                        <img src={bannerImg} className="w-full md:max-w-md rounded-full shadow-2xl" alt='' />
                    </div>
                    <div data-aos="fade-right" className='lg:mr-18'>
                        <h1 className="text-3xl md:text-6xl font-bold text-primary">Rubayet Billah</h1>
                        <p className="text-xl md:text-3xl py-6">Frontend Developer</p>
                        <button className='btn btn-primary btn-sm md:btn-md'><a href="https://drive.google.com/file/d/1V8r_viLpTSHNcx10_cIsy3Reox-S6_WR/view" target='_blank' rel="noreferrer">View Resume</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;