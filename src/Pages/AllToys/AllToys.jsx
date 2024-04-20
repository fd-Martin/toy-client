import React, { useEffect, useRef, useState } from 'react';
import ToysTable from '../ToysTable/ToysTable';
import useTitle from '../../Hooks/useTitle';

const AllToys = () => {

    const [allToys, setAllToys] = useState();
    const [search, setSearch] = useState('');
    useEffect(() => {
        fetch(`http://localhost:3000/allToys?search=${search}`)
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, [search])
    useTitle('All Toys');

    const searchToy = useRef(null);
    const handleSearch = () => {
        console.log(searchToy.current.value);
        setSearch(searchToy.current.value)
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
                allToys ? <div className="overflow-x-auto md:px-20 mt-8">
                    <div className='flex items-center justify-end'>

                        <div>
                            <h1>Search Toy : </h1>
                        </div>
                        <div className="join ml-2">
                            <div>
                                <div>
                                    <input className="input input-bordered join-item border-black" ref={searchToy} placeholder="Toy Name" />
                                </div>
                            </div>
                            <div className="indicator">
                                <button className="btn join-item border-1 border-black" onClick={handleSearch}>Search</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <table className=" table  table-pin-rows table-pin-cols">
                            <thead className='text-black text-center'>
                                <tr>
                                    <th>Serial Np.</th>
                                    <td> Toy Name</td>
                                    <td>Sub-Category</td>
                                    <td>Price</td>
                                    <td>Seller Name</td>
                                    <td>Available Quantity</td>
                                    <td> View Details</td>
                                </tr>
                            </thead>
                            <tbody>
                                {allToys.map((toyTable, index) => (
                                    <ToysTable
                                        key={index}
                                        index={index}
                                        toyTable={toyTable}
                                    />
                                ))}
                            </tbody>


                        </table>

                    </div>
                </div> : (
                    <div className="flex justify-center items-center h-screen">
                        <span className="loading loading-ring loading-lg"></span>
                    </div>
                )}

        </div>
    );
};

export default AllToys;