import React from 'react';
import CaontactMe from '../../ContactMe/CaontactMe';
import Banner from '../Banner/Banner';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Projects></Projects>
            <CaontactMe></CaontactMe>
        </div>
    );
};

export default Home;