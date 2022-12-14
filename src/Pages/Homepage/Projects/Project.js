import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai'

const Project = ({ project }) => {
    const { _id, image, name, details, link, ratings } = project
    return (
        <div data-aos="fade-up" className=''>

            <div className="card card-compact w-80 mx-auto md:w-full bg-secondary-focus shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="p-6">
                    <h2 className="card-title">{name}</h2>
                    <p>{details}</p>
                    <section className='flex justify-between items-end'>
                        <div>
                            <p className='text-yellow-600'><a href={link} target='_blank' rel="noreferrer">View Project</a></p>
                            <p className='flex items-center mt-1'>Ratings: <AiFillStar className='text-yellow-500 ml-1' /> {ratings}</p>
                        </div>
                        <Link to={`/projects/${_id}`}><button className="btn btn-primary btn-sm">Deatils</button></Link>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Project;