import React from 'react';
import { Link } from 'react-router-dom';

const ToysTable = ({ toyTable, index }) => {
    const { toy_name, seller_name, price, quantity, subcategory } = toyTable;
    return (
        <>
            <tr className="hover">
                <th>{index + 1}</th>
                <td>{toy_name}</td>
                <td>{subcategory}</td>
                <td>{price}</td>
                <td>{seller_name}</td>
                <td>{quantity}</td>
                <td> <Link> <button className='btn font-bold ease-in-out border-white  hover:bg-white hover:text-black duration-1000'>View Details</button> </Link>  </td>

            </tr>
        </>
    );
};

export default ToysTable;

