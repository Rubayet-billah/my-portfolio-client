import React from 'react';
import bannerImg from '../../../assets/bannerImg/profile 2.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-[70vh]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='lg:mx-8'>
                        <img src={bannerImg} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    </div>
                    <div className='lg:mx-8'>
                        <h1 className="text-5xl font-bold text-accent">Rubayet Billah</h1>
                        <p className="text-2xl py-6">I am a Front-end Developer from Bangladesh.I love to do codes.I love to design.</p>
                        <button className='btn btn-accent btn-sm md:btn-md rounded-3xl'><a href="https://drive.google.com/file/d/1V8r_viLpTSHNcx10_cIsy3Reox-S6_WR/view" target='_blank' rel="noreferrer">View Resume</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;