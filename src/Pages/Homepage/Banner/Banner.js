import React from 'react';
import bannerImg from '../../../assets/bannerImg/portfolioProfile.png'

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-[70vh]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='lg:mx-8 hover:scale-105 ease-in duration-200'>
                        <img src={bannerImg} className="w-full md:max-w-md rounded-full shadow-2xl" alt='' />
                    </div>
                    <div className='lg:mx-8 hover:scale-105 ease-in duration-200'>
                        <h1 className="text-5xl font-bold text-accent">Rubayet Billah</h1>
                        <p className="text-2xl py-6">Frontend Developer</p>
                        <button className='btn btn-accent btn-sm md:btn-md'><a href="https://drive.google.com/file/d/1V8r_viLpTSHNcx10_cIsy3Reox-S6_WR/view" target='_blank' rel="noreferrer">View Resume</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;