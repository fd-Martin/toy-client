import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleToy = () => {
    const singleToyData = useLoaderData();
    console.log(singleToyData);
    const { description, photo_url, price, quantity, rating, seller_email, seller_name, toy_name, _id } = singleToyData;
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={photo_url} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{toy_name}</h1>
                        <h2 className="py-6">Description:{description}</h2>
                        <p className="py-6">Price: {price}</p>
                        <p className="py-6">Quantity:{quantity}</p>
                        <p className="py-6">Rating :{rating}</p>
                        <p className="py-6">Seller Email:{seller_email}</p>
                        <p className="py-6">Seller Name:{seller_name}</p>

                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleToy;