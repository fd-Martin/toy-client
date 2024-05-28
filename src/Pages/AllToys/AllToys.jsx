import React, { useEffect, useRef, useState } from 'react';
import ToysTable from '../ToysTable/ToysTable';
import useTitle from '../../Hooks/useTitle';
import { useLoaderData } from 'react-router-dom';

const AllToys = () => {
    const [allToys, setAllToys] = useState([]);
    const [search, setSearch] = useState('');
    const totalToys = useLoaderData();
    const [currentPage, setCurrentPage] = useState(0);
    const [toysPerPage, setToysPerPage] = useState(5);
    const options = [5, 10, 15, 20];
    const totalPages = Math.ceil(totalToys.totalToysNum / toysPerPage);
    const pageNumbers = [...Array(totalPages).keys()];
    const [loading, setLoading] = useState(true);

    const handleSelectedChange = event => {
        setToysPerPage(parseInt(event.target.value));
        setCurrentPage(0);
    }

    useEffect(() => {
        setLoading(true);
        fetch(`https://toy-server-green.vercel.app/allToys?search=${search}&page=${currentPage}&limit=${toysPerPage}`)
            .then(res => res.json())
            .then(data => {
                setAllToys(data);
                setLoading(false);
            });
    }, [search, currentPage, toysPerPage]);

    useTitle('All Toys');

    const searchToy = useRef(null);

    const handleSearch = () => {
        setSearch(searchToy.current.value);
    }

    const handleNextPage = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(currentPage + 1);
        }
    }

    const handlePreviousPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    }

    return (
        <div>
            <div className="hero min-h-72" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1511415518647-9e5da4fd803f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">All Toys</h1>
                    </div>
                </div>
            </div>
            {
                loading ? (
                    <div className="flex justify-center items-center h-40">
                        <span className="loading loading-bars loading-lg"></span>
                    </div>
                ) : allToys.length > 0 ? (
                    <div className="overflow-x-auto md:px-10 mt-8 px-4">
                        <div className='flex flex-col md:flex-row items-center justify-start mb-4'>
                            <div>
                                <h1>Search Toy :</h1>
                            </div>
                            <div className="join ml-2 mt-2 md:mt-0 md:ml-4">
                                <div>
                                    <input className="input input-bordered join-item" ref={searchToy} placeholder="Toy Name" />
                                </div>
                                <div className="indicator">
                                    <button className="btn join-item border-black" onClick={handleSearch}>Search</button>
                                </div>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="table table-pin-rows table-pin-cols w-full">
                                <thead className='text-black text-center'>
                                    <tr>
                                        <td>Serial No.</td>
                                        <td>Toy Name</td>
                                        <td>Sub-Category</td>
                                        <td>Price</td>
                                        <td>Seller Name</td>
                                        <td>Available Quantity</td>
                                        <td>View Details</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {allToys.map((toyTable, index) => (
                                        <ToysTable
                                            key={index}
                                            currentPage={currentPage}
                                            toysPerPage={toysPerPage}
                                            index={index}
                                            toyTable={toyTable}
                                        />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className='flex flex-col md:flex-row items-center justify-center mt-4'>
                            <div className='flex items-center mb-4 md:mb-0'>
                                <button
                                    className={`join-item btn mx-1 ${currentPage === 0 ? 'btn-disabled' : ''}`}
                                    onClick={handlePreviousPage}
                                    disabled={currentPage === 0}
                                >
                                    Previous
                                </button>
                                {
                                    pageNumbers.map(number =>
                                        <button
                                            className={`join-item btn mx-1 ${currentPage === number ? 'btn-active' : ''}`}
                                            key={number}
                                            onClick={() => setCurrentPage(number)}
                                        >
                                            {number + 1}
                                        </button>
                                    )
                                }
                                <button
                                    className={`join-item btn mx-1 ${currentPage === totalPages - 1 ? 'btn-disabled' : ''}`}
                                    onClick={handleNextPage}
                                    disabled={currentPage === totalPages - 1}
                                >
                                    Next
                                </button>
                            </div>
                            <div className='flex items-center'>
                                <span className='mr-2'>Items per page:</span>
                                <select value={toysPerPage} onChange={handleSelectedChange} className="select select-bordered">
                                    {options.map(option => (
                                        <option key={option} value={option}>{option}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-8">
                            <div>
                                <span className='text-4xl'>No toys found.</span>
                            </div>
                        </div>
                )
            }
        </div>
    );
};

export default AllToys;
