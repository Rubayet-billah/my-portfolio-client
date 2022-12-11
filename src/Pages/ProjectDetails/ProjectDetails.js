import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProjectDetails = () => {
    const project = useLoaderData();

    const { name, detailsImage, featureDetails, link, ratings } = project;
    return (
        <div className='bg-neutral md:p-8 rounded bg-opacity-50 mt-5'>
            <h2 className='text-4xl'>Project Details</h2>
            <section>
                <h1 className='text-3xl text-center font-bold'>{name}</h1>
                <h1>Live preview</h1>
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
                <h2 className='text-xl'>{featureDetails}</h2>
            </section>
        </div>
    );
};

export default ProjectDetails;