import React, { useEffect, useState } from 'react';
import Project from './Project';

const Projects = () => {
    const [projects, setProjects] = useState();
    console.log(projects)
    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => {
                setProjects(data)
            })
    }, [])
    return (
        <div>
            <h1 className='text-4xl text-center font-bold mb-8'>Projects</h1>
            <section className='grid md:grid-cols-2 lg:grid-cols-3'>
                {
                    projects?.map(project => <Project
                        key={project._id}
                        project={project}
                    />)
                }
            </section>
        </div>
    );
};

export default Projects;