import React from 'react';
import { Link } from 'react-router-dom';

const CoinCard = ({ coin }) => {
    console.log(coin);
    const { name, image, symbol } = coin;
    return (
        <div className='shadow-lg rounded-2xl w-[250px] bg-white p-4'>
            <Link to={`/coin-details/${coin.id}`}>
                <div className='gap-4 flex justify-between items-center'>
                    <div className='flex-shrink-0'>
                        <img src={image} className='mx-auto object-cover rounded-full h-16 w-16' alt="" />
                    </div>
                    <div className='flex flex-col justify-end'>
                        <span className='text-gray-600 font-medium'>{name}</span>
                        <span className='text-gray-600 font-xs'>{symbol}</span>
                    </div>
                </div>
            </Link>
        </div>
    )
};

export default CoinCard;