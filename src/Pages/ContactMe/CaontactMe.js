import React from 'react';

const CaontactMe = () => {
    return (
        <div className='my-5'>
            <h1 className='text-4xl text-center font-bold mb-8'>Contact With Me</h1>
            <form className='max-w-lg p-5 md:p-8 mx-auto bg-neutral-focus rounded-lg'>
                <input type="email" placeholder='Enter your email' className="input input-bordered w-full bg-neutral my-3" />
                <textarea className="textarea textarea-bordered w-full bg-neutral my-3" placeholder="Write your message"></textarea>
                <input className='btn btn-accent block w-full' type="submit" value="Send Mail" />
            </form>
        </div>
    );
};

export default CaontactMe;