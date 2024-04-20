import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ToysTable from '../ToysTable/ToysTable';
import useTitle from '../../Hooks/useTitle';

const AllToys = () => {
    useTitle('All Toys');
    const allToys = useLoaderData();

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
            <div className="overflow-x-auto md:px-20 mt-8">
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
                        {
                            allToys.map((toyTable, index) => <ToysTable
                                key={index}
                                index={index}
                                toyTable={toyTable}>
                            </ToysTable>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllToys;