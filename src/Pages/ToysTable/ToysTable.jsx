import React from 'react';
import { Link } from 'react-router-dom';

const ToysTable = ({ toyTable, index }) => {
    const { toy_name, seller_name, price, quantity, subcategory, _id } = toyTable;
    return (
        <>
            <tr className="hover text-center">
                <td>{index + 1}</td>
                <td>{toy_name}</td>
                <td>{subcategory}</td>
                <td>{price}</td>
                <td>{seller_name}</td>
                <td>{quantity}</td>
                <td> <Link to={`/alltoys/${_id}`}> <button className='btn font-bold ease-in-out hover:bg-black hover:text-white duration-1000 border-spacing-1 border-black'>View Details</button> </Link>  </td>

            </tr>
        </>
    );
};

export default ToysTable;

