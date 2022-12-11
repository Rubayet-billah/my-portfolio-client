import React from 'react';
import myPhoto from '../../assets/bannerImg/profile 2.jpg'
import { MdLocalPhone, MdEmail, MdLocationPin } from 'react-icons/md'

const AboutMe = () => {
    return (
        <div className='bg-neutral md:p-8 rounded bg-opacity-50'>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='lg:mx-8 hover:scale-105 ease-in duration-200'>
                    <img src={myPhoto} className="w-full md: max-w-md rounded-full shadow-2xl" alt='' />
                </div>
                <div className='lg:mx-8 hover:scale-105 ease-in duration-200 max-w-lg'>
                    <h1 className='text-2xl text-center font-bold'>About Me</h1>
                    <p className="py-6 text-justify">
                        Hi, I am <span className='text-accent font-bold'>Rubayet Billah</span>, a front-end developer from Bangladesh. I have been interested in computer technology since childhood. After completing my secondary education I started to gather basic programming knowledge. I choose web development to enter this IT world. Starting with HTML, CSS and now I am comfortable with front-end technologies like <span className='text-accent font-bold'>React JS, Javascript, Bootstrap, Tailwind, Firebase</span> etc and some backend technologies like <span className='text-accent font-bold'>Node JS, Express JS, MongoDB</span> etc.
                        <br />
                        Apart from technology, I have interest in electronics and astrophysics. I spend my time here whenever I have some free time.
                    </p>
                    <h1 className='text-2xl text-center font-bold'>Contact Info</h1>
                    <div>
                        <div className='flex items-center'><MdLocalPhone className='mr-1' />+8801875685814</div>
                        <div className='flex items-center'><MdEmail className='mr-1' />rubayetbillah909@gmail.com</div>
                        <div className='flex items-center'><MdLocationPin className='mr-1' />Gopalganj, Bangladesh</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;