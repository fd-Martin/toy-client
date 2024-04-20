import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import MyToysRowData from '../MyToysRowData/MyToysRowData';
import Swal from 'sweetalert2';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    const url = `http://localhost:3000/allToys?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [url])

    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this toy!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/allToys/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount === 1) {
                            Swal.fire({
                                title: 'Deleted!',
                                text: 'Your toy has been deleted.',
                                icon: 'success',
                            });
                            const remaining = myToys.filter(myToy => myToy._id !== _id);
                            setMyToys(remaining);
                        } else {
                            Swal.fire({
                                title: 'Error!',
                                text: 'Failed to delete the toy.',
                                icon: 'error',
                            });
                        }
                    })
            }
        });
    };

    return (
        <div>
            <div className="overflow-x-auto md:px-20 py-12 ">
                <table className=" table  table-pin-rows table-pin-cols text-center">
                    {/* head */}
                    <thead className='text-black'>
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
                                myToy={myToy}
                                handleDelete={handleDelete}>
                            </MyToysRowData>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyToys;