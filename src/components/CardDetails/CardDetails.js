import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CardDetails = () => {
    const [coin, setCoin] = useState({})
    console.log(coin);
    const { name, image, market_cap_rank, country_origin, contract_address, hashing_algorithm, genesis_date, last_updated, community_score, developer_score, liquidity_score, public_interest_score } = coin;
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
                    <h1 className='text-3xl text-gray-600'>General Info</h1>
                    <p>Coin Name: {name}</p>
                    <p>Market Cap Rank: {market_cap_rank}</p>
                    <p>Origin: {country_origin ? country_origin : 'Not Available'}</p>
                    <p>Contract Address:{contract_address} </p>
                    <p>Hashing Algorithm: {hashing_algorithm}</p>
                    <p>Genesis Data: {genesis_date}</p>
                    <p>Last Updated: {last_updated}</p>
                </div>
                <div>
                    <h1 className='text-3xl text-gray-600'>Scores</h1>
                    <p>Community Score: {community_score}</p>
                    <p>Developer Score: {developer_score}</p>
                    <p>Liquidity Score: {liquidity_score}</p>
                    <p>Public Interest Score: {public_interest_score}</p>
                </div>
            </div>
            <div>
                <img src={image?.large} alt="" />
            </div>
        </div>
    );
};

export default CardDetails;