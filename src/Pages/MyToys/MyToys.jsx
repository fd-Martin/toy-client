import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import MyToysRowData from '../MyToysRowData/MyToysRowData';
import Swal from 'sweetalert2';
import useTitle from '../../Hooks/useTitle';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    const [ascending, setAscending] = useState(true);

    useTitle('My Toys');

    useEffect(() => {
        const url = `https://toy-server-green.vercel.app/allToys?email=${user?.email}&sort=${ascending ? 'ascending' : 'descending'}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMyToys(data);
            });
    }, [user, ascending]);

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
                fetch(`https://toy-server-green.vercel.app/allToys/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
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
                    });
            }
        });
    };

    return (
        <div>
            <div className="hero min-h-72" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1578652520385-c05f6f3b5de3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">My Toys</h1>
                        <div className='flex justify-center items-center mb-4'>
                            <h2 className='font-bold mr-2'>Display Data By Price :</h2>
                            <button onClick={() => setAscending(!ascending)} className='btn btn-outline-info border-2 ease-in-out border-white text-white bg-transparent hover:bg-transparent hover:border-blue-700 transition-colors duration-1000'>
                                {ascending ? 'High to Low' : ' Low to High'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {myToys.length === 0 ? (
                <div className="text-center py-8">
                    <div>
                        <span className='text-4xl'>No toys added yet. Please add some toys to see them here.</span>
                    </div>
                </div>
            ) : (
                <div className="overflow-x-auto md:px-10 px-4 py-12">
                    <table className="table table-pin-rows table-pin-cols text-center w-full">
                        <thead className='text-black'>
                            <tr>
                                <td>Serial No.</td>
                                <td>Toy Name & Sub-Category</td>
                                <td>Price</td>
                                <td>Rating</td>
                                <td>Seller Name & Email</td>
                                <td>Available Quantity</td>
                                <td>Update/Delete Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {myToys.map((myToy, index) => (
                                <MyToysRowData
                                    key={index}
                                    index={index}
                                    myToy={myToy}
                                    handleDelete={handleDelete}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default MyToys;
