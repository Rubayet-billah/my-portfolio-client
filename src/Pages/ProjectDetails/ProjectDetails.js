import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProjectDetails = () => {
    const project = useLoaderData();

    const { name, detailsImage, featureDetails, link, codeLink, ratings } = project;
    return (
        <div className='bg-secondary md:p-8 rounded bg-opacity-50 px-2 mt-5'>
            <h2 className='text-4xl text-center mb-4'>Project Details</h2>
            <section>
                <h1 className='text-xl font-bold my-3'>{name}</h1>
                <button className='btn btn-primary btn-outline btn-sm'><a href={link} rel="noreferrer" target='_blank'>Live Preview</a></button>
                <button className='btn btn-primary btn-outline btn-sm ml-2'><a href={codeLink} rel="noreferrer" target='_blank'>Code Link</a></button>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-5'>
                    <div>
                        <img className='mx-auto rounded' src={detailsImage.first} alt="" />
                    </div>
                    <div>
                        <img className='mx-auto rounded' src={detailsImage.second} alt="" />
                    </div>
                    <div>
                        <img className='mx-auto rounded' src={detailsImage.third} alt="" />
                    </div>
                </div>
                <h2 className='md:text-xl'>{featureDetails}</h2>
            </section>
        </div>
    );
};

export default ProjectDetails;