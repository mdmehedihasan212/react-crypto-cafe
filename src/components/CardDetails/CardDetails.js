import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CardDetails = () => {
    const [coin, setCoin] = useState({})
    console.log(coin);
    const { id } = useParams();
    useEffect(() => {
        const url = `https://api.coingecko.com/api/v3/coins/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCoin(data))
    }, [id])
    return (
        <div>
            <div>
                <div>
                    <h1>General Info:</h1>
                    <p>Coin Name: {coin.name}</p>
                    <p>Market Cap Rank: </p>
                    <p>Origin: </p>
                    <p>Contract Address: </p>
                    <p>Hashing Algorithm: </p>
                    <p>Genesis Data: </p>
                    <p>Last Updated: </p>
                </div>
                <div>
                    <h1>Scores:</h1>
                    <p>Community Score: </p>
                    <p>Developer Score: </p>
                    <p>Liquidity Score: </p>
                    <p>Public Interest Score: </p>
                </div>
            </div>
            <div>
                <img src={coin.image} alt="" />
            </div>
        </div>
    );
};

export default CardDetails;