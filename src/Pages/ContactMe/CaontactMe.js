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
        <div className='my-5'>
            <h1 className='text-4xl text-center font-bold mb-8'>Contact With Me</h1>
            <form ref={form} onSubmit={sendEmail} className='max-w-lg p-5 md:p-8 mx-auto bg-neutral-focus rounded-lg'>
                <input type="email" name="from_email" placeholder='Enter your email' className="input input-bordered w-full bg-neutral my-3" />
                <textarea name="message" className="textarea textarea-bordered w-full bg-neutral my-3" placeholder="Write your message"></textarea>
                <input className='btn btn-accent block w-full' type="submit" value="Send Mail" />
            </form>
        </div>
    );
};

export default CaontactMe;