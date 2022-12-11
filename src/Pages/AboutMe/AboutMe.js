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
                    <p className="py-6">Hi, I am <span className='text-accent font-bold'>Rubayet Billah</span> and I am a Front-end Developer from Bangladesh.Form my early age I was interested in computer technology. After completing secondary education I started to gather knowledge of programming. I made myself comfortable with technologies like <span className='text-accent font-bold'>React Js, HTML, CSS, Node Js, Firebase</span> etc.</p>
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