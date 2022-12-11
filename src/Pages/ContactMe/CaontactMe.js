import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const CaontactMe = () => {
    const form = useRef();
    const serviceId = process.env.REACT_APP_serviceId;
    const templateId = process.env.REACT_APP_templateId;
    const publicKey = process.env.REACT_APP_publicKey;


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
            .then((result) => {
                console.log(result.text);
                toast.success('Email send successfully')
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className='bg-secondary md:p-8 rounded bg-opacity-50 mt-5'>
            <h1 className='text-4xl text-center font-bold mb-8'>Contact With Me</h1>
            <form data-aos="fade-up" ref={form} onSubmit={sendEmail} className='max-w-lg p-5 md:p-8 mx-auto bg-secondary-focus rounded-lg hover:scale-105 ease-in duration-200'>
                <input type="email" name="from_email" placeholder='Enter your email' className="input input-bordered w-full bg-secondary my-3" />
                <textarea name="message" className="textarea textarea-bordered w-full bg-secondary my-3" placeholder="Write your message"></textarea>
                <input className='btn btn-primary block w-full' type="submit" value="Send Mail" />
            </form>
        </div>
    );
};

export default CaontactMe;