import React from 'react';
import { Link } from 'react-router-dom';

const MyToysRowData = ({ myToy, index, handleDelete }) => {
    const { description, photo_url, toy_name, subcategory, price, rating, quantity, seller_email, seller_name, _id } = myToy;

    return (
        <>
            <tr className="hover">
                <td>{index + 1}.</td>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={photo_url} />
                            </div>
                        </div>
                        <div className='flex-col text-left'>
                            <div className="font-bold"> {toy_name}</div>
                            <div className="text-sm"> {subcategory}</div>
                        </div>
                    </div>
                </td>
                <td>$ {price}</td>
                <td> {rating}/5</td>
                <td>
                    <div className="flex items-center gap-3">
                        <div className='flex-col text-left'>
                            <div className="font-bold"> {seller_name}</div>
                            <div className="text-sm"> {seller_email}</div>
                        </div>
                    </div>
                </td>
                <td>{quantity}</td>
                <td>
                    <Link to={`/updateToy/${_id}`}>
                        <button className='btn btn-outline-success border-2 ease-in-out border-green-700 text-green-700 hover:bg-green-700 hover:text-white transition-colors duration-1000 m-2'>Update Toy</button>
                    </Link>
                    <button onClick={() => handleDelete(_id)} className='btn btn-outline-warning border-2 ease-in-out border-red-700 text-red-700 hover:bg-red-700 hover:text-white transition-colors duration-1000 m-2'>Delete Toy</button>
                </td>

            </tr>
        </>
    );
};

export default MyToysRowData;