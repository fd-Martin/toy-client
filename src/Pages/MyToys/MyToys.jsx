import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import MyToysRowData from '../MyToysRowData/MyToysRowData';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    const url = `http://localhost:3000/allToys?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [url])

    return (
        <div>
            <div className="overflow-x-auto md:px-20 py-12">
                <table className=" table  table-pin-rows table-pin-cols text-center">
                    {/* head */}
                    <thead>
                        <tr>
                            <td>Serial No.</td>
                            <td> Toy Name & Sub-Category </td>
                            <td>Price</td>
                            <td>Rating</td>
                            <td> Seller Name & Email</td>
                            <td>Available Quantity</td>
                            <td>Update/Delete Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToys.map((myToy, index) => <MyToysRowData
                                key={index}
                                index={index}
                                myToy={myToy}>
                            </MyToysRowData>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyToys;