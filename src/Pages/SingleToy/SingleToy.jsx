import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const SingleToy = () => {
    const singleToyData = useLoaderData();

    const { description, photo_url, price, quantity, rating, seller_email, seller_name, toy_name } = singleToyData;

    return (
        <div className="flex justify-center items-center min-h-screen px-4 py-8">
            <div className="flex flex-col w-full max-w-4xl">
                <div className="hero-content flex flex-col lg:flex-row items-center lg:items-start lg:justify-between">
                    <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
                        <img src={photo_url} className="w-full rounded-lg shadow-md" alt={toy_name} />
                    </div>
                    <div className="w-full lg:w-1/2 lg:pl-8">
                        <h1 className="text-2xl lg:text-4xl font-bold mb-4">{toy_name}</h1>
                        <h2 className="py-1 text-md lg:text-lg font-semibold">Description: {description}</h2>
                        <p className="py-1 text-md lg:text-lg font-semibold">Price: ${price}</p>
                        <p className="py-1 text-md lg:text-lg font-semibold">Quantity: {quantity}</p>
                        <p className="py-1 text-md lg:text-lg font-semibold">Rating: {rating}</p>
                        <p className="py-1 text-md lg:text-lg font-semibold">Seller Email: {seller_email}</p>
                        <p className="py-1 text-md lg:text-lg font-semibold">Seller Name: {seller_name}</p>
                    </div>
                </div>
                <div className="mt-8">
                    <Link to="/alltoys">
                        <button className="btn btn-block btn-warning text-white font-bold hover:bg-yellow-500 hover:text-black">
                            Back to All Toys
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleToy;
