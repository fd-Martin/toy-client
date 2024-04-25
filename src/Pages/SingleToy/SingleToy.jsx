import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const SingleToy = () => {
    const singleToyData = useLoaderData();

    const { description, photo_url, price, quantity, rating, seller_email, seller_name, toy_name, _id } = singleToyData;
    return (
        <div className="flex justify-center items-center h-96">
            <div className='flex flex-col'>
                <div className="hero-content flex-col lg:flex-row">
                    <div>
                        <img src={photo_url} className="max-w-sm rounded-lg" />
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold">{toy_name}</h1>
                        <h2 className="py-1 font-semibold">Description : {description}</h2>
                        <p className="py-1 font-semibold">Price : {price}</p>
                        <p className="py-1 font-semibold">Quantity : {quantity}</p>
                        <p className="py-1 font-semibold">Rating : {rating}</p>
                        <p className="py-1 font-semibold">Seller Email : {seller_email}</p>
                        <p className="py-1 font-semibold">Seller Name : {seller_name}</p>
                    </div>
                </div>
                <div>
                    <Link to='/alltoys'>
                        <button className='btn btn-block btn-warning text-white font-bold hover:bg-yellow-500 hover:text-black'>
                            Back to All Toys
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleToy;
