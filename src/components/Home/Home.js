import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className='flex flex-col h-[80vh] justify-center items-center'>
            <h1 className='font-mono text-xl md:text-6xl'>Welcome to CRYPTO CAFE <span className='text-xl md:text-6xl'>☕</span></h1>
            <Link to={'/coins'} className='bg-cyan-600 text-white py-2 px-3 rounded-full mt-3' >Explore Coins</Link>
        </div>
    );
};

export default Home;