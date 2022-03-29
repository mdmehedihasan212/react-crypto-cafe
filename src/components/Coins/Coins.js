import React, { useEffect, useState } from 'react';
import CoinCard from '../CoinCard/CoinCard';

const Coins = () => {
    const [coins, setCoins] = useState([])
    useEffect(() => {
        const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCoins(data))
    }, [])
    return (
        <div>
            <p className='text-center text-3xl font-bold text-gray-600'>Available Crypto Currencies</p>
            <p className='text-xl text-gray-800 mt-2'>Total coins: {coins.length}</p>
            <div className='grid grid-cols-1 md:grid-col-2 lg:grid-cols-3'>
                {
                    coins.map(coin => <CoinCard key={coin.id} coin={coin}></CoinCard>)
                }
            </div>
        </div>
    );
};

export default Coins;