import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

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
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className='my-5'>
            <h1 className='text-4xl text-center font-bold mb-8'>Contact With Me</h1>
            <form ref={form} onSubmit={sendEmail} className='max-w-lg p-5 md:p-8 mx-auto bg-neutral-focus rounded-lg'>
                <input type="email" name="user_email" placeholder='Enter your email' className="input input-bordered w-full bg-neutral my-3" />
                <textarea name="message" className="textarea textarea-bordered w-full bg-neutral my-3" placeholder="Write your message"></textarea>
                <input className='btn btn-accent block w-full' type="submit" value="Send Mail" />
            </form>

            {/* <form ref={form} onSubmit={sendEmail}>
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form> */}


        </div>
    );
};

export default CaontactMe;