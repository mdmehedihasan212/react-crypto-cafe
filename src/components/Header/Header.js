import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='sticky bg-white top-0 flex justify-center px-14 py-8 md:justify-between'>
            <div className='md:block'>
                <Link className='font-sans text-xl font-bold text-gray-600' to={'/'}>React Crypto Cafe</Link>
            </div>
            <div className='flex text-xl gap-4'>
                <Link to='/'>Home</Link>
                <Link to='/coins'>Coins</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/about'>About</Link>
            </div>
        </div>
    );
};

export default Header;