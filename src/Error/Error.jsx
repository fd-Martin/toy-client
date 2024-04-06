import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import errorImg from '../Error/error.png';
import { FaHome } from "react-icons/fa";
const Error = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <div>
            <div className='max-w-4xl mx-auto px-5 py-10 text-center'>
                <div className='mx-auto w-full p-5'>
                    <img src={errorImg} alt="" className='mx-auto w-full' />
                </div>
                <div>
                    <h1 className='text-6xl font-bold mb-5'>Oops!</h1>
                    <p className='text-4xl font-semibold'>Sorry, an unexpected error has occurred.</p>
                    <p className='text-3xl font-semibold'>Error {error?.status}</p>
                    <p className='text-2xl font-semibold'>
                        {error?.error?.message}
                    </p>
                    <div>
                        <button className='border rounded-lg p-2 mt-4'>
                            <Link to="/">
                                <span className='flex items-center'><FaHome className='mr-2' /> Back to Home Page</span>
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error;