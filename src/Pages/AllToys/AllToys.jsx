import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ToysTable from '../ToysTable/ToysTable';
import useTitle from '../../Hooks/useTitle';

const AllToys = () => {
    useTitle('All Toys');
    const allToys = useLoaderData();

    return (
        <div>
            <div className='h-52 place-content-center'>
                <h1 className='text-center font-extrabold text-3xl'> All Toys</h1>
            </div>
            <div className="overflow-x-auto md:px-20">
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