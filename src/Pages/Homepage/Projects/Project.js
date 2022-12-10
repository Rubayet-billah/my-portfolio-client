import React from 'react';

const Project = ({ project }) => {
    const { image, name, details, link, ratings } = project
    return (
        <div>
            {/* <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{details}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div> */}

            <div className="card card-compact w-96 bg-neutral-focus shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{details}</p>
                    <p>{details}</p>
                    <p>{details}</p>
                    <div className="card-actions justify-end">
                        {/* <button className="btn btn-primary">Buy Now</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;