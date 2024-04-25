import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const ShopByCategory = () => {
    const [toys, setToys] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useContext(AuthContext);

    const handleClick = () => {
        if (!user) {
            Swal.fire("You have to log in first to view details");
        }
    }
    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:3000/toysBySubcategory')
            .then(res => res.json())
            .then(data => {
                setToys(data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            });
    }, []);

    return (
        <div className="p-10">
            <h1 className="text-6xl mb-8 font-bold text-center">Toy Store</h1>
            <Tabs>
                <TabList>
                    <Tab>Truck</Tab>
                    <Tab>Sports Car</Tab>
                    <Tab>Regular Car</Tab>
                    <Tab>Mini Fire Truck</Tab>
                    <Tab>Mini Police Car</Tab>
                </TabList>

                <TabPanel>
                    {loading ? (
                        <div className="flex justify-center items-center h-32">
                            <span className="loading loading-ring loading-lg"></span>
                        </div>
                    ) : toys.filter(toy => toy.subcategory === 'Truck').length === 0 ? (
                        <p className='text-center font-semibold py-4 text-4xl'>No Toy Found</p>
                    ) : (
                        <table className="table-auto w-full">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Rating</th>
                                    <th>Price</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {toys.filter(toy => toy.subcategory === 'Truck').slice(0, 2).map(toy => (
                                    <tr key={toy._id} className='text-center'>
                                        <td><img src={toy.photo_url} alt={toy.toy_name} className="h-16 mx-auto" /></td>
                                        <td>{toy.toy_name}</td>
                                        <td>{toy.rating}</td>
                                        <td>{toy.price}</td>
                                        <td> <Link to={`/alltoys/${toy._id}`}> <button className='btn font-bold ease-in-out hover:bg-black hover:text-white duration-1000 border-spacing-1 border-black' onClick={() => { handleClick() }}>View Details</button> </Link> </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </TabPanel>

                <TabPanel>
                    {loading ? (
                        <div className="flex justify-center items-center h-32">
                            <span className="loading loading-ring loading-lg"></span>
                        </div>
                    ) : toys.filter(toy => toy.subcategory === 'Sports Car').length === 0 ? (
                        <p className='text-center font-semibold py-4 text-4xl'>No Toy Found</p>
                    ) : (
                        <table className="table-auto w-full">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Rating</th>
                                    <th>Price</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {toys.filter(toy => toy.subcategory === 'Sports Car').slice(0, 2).map(toy => (
                                    <tr key={toy._id} className='text-center'>
                                        <td><img src={toy.photo_url} alt={toy.toy_name} className="h-16 mx-auto" /></td>
                                        <td>{toy.toy_name}</td>
                                        <td>{toy.rating}</td>
                                        <td>{toy.price}</td>
                                        <td><Link to={`/alltoys/${toy._id}`}> <button className='btn font-bold ease-in-out hover:bg-black hover:text-white duration-1000 border-spacing-1 border-black' onClick={() => { handleClick() }}>View Details</button> </Link> </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </TabPanel>

                <TabPanel>
                    {loading ? (
                        <div className="flex justify-center items-center h-32">
                            <span className="loading loading-ring loading-lg"></span>
                        </div>
                    ) : toys.filter(toy => toy.subcategory === 'Regular Car').length === 0 ? (
                        <p className='text-center font-semibold py-4 text-4xl'>No Toy Found</p>
                    ) : (
                        <table className="table-auto w-full">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Rating</th>
                                    <th>Price</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {toys.filter(toy => toy.subcategory === 'Regular Car').slice(0, 2).map(toy => (
                                    <tr key={toy._id} className='text-center'>
                                        <td><img src={toy.photo_url} alt={toy.toy_name} className="h-16 mx-auto" /></td>
                                        <td>{toy.toy_name}</td>
                                        <td>{toy.rating}</td>
                                        <td>{toy.price}</td>
                                        <td><Link to={`/alltoys/${toy._id}`}> <button className='btn font-bold ease-in-out hover:bg-black hover:text-white duration-1000 border-spacing-1 border-black' onClick={() => { handleClick() }}>View Details</button> </Link> </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </TabPanel>

                <TabPanel>
                    {loading ? (
                        <div className="flex justify-center items-center h-32">
                            <span className="loading loading-ring loading-lg"></span>
                        </div>
                    ) : toys.filter(toy => toy.subcategory === 'Mini Fire Truck').length === 0 ? (
                        <p className='text-center font-semibold py-4 text-4xl'>No Toy Found</p>
                    ) : (
                        <table className="table-auto w-full">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Rating</th>
                                    <th>Price</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {toys.filter(toy => toy.subcategory === 'Mini Fire Truck').slice(0, 2).map(toy => (
                                    <tr key={toy._id} className='text-center'>
                                        <td><img src={toy.photo_url} alt={toy.toy_name} className="h-16 mx-auto" /></td>
                                        <td>{toy.toy_name}</td>
                                        <td>{toy.rating}</td>
                                        <td>{toy.price}</td>
                                        <td><Link to={`/alltoys/${toy._id}`}> <button className='btn font-bold ease-in-out hover:bg-black hover:text-white duration-1000 border-spacing-1 border-black' onClick={() => { handleClick() }}>View Details</button> </Link> </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </TabPanel>

                <TabPanel>
                    {loading ? (
                        <div className="flex justify-center items-center h-32">
                            <span className="loading loading-ring loading-lg"></span>
                        </div>
                    ) : toys.filter(toy => toy.subcategory === 'Mini Police Car').length === 0 ? (
                        <p className='text-center font-semibold py-4 text-4xl'>No Toy Found</p>
                    ) : (
                        <table className="table-auto w-full">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Rating</th>
                                    <th>Price</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {toys.filter(toy => toy.subcategory === 'Mini Police Car').slice(0, 2).map(toy => (
                                    <tr key={toy._id} className='text-center'>
                                        <td><img src={toy.photo_url} alt={toy.toy_name} className="h-16 mx-auto" /></td>
                                        <td>{toy.toy_name}</td>
                                        <td>{toy.rating}</td>
                                        <td>{toy.price}</td>
                                        <td><Link to={`/alltoys/${toy._id}`}> <button className='btn font-bold ease-in-out hover:bg-black hover:text-white duration-1000 border-spacing-1 border-black' onClick={() => { handleClick() }}>View Details</button> </Link> </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </TabPanel>



            </Tabs>
        </div>
    );
}

export default ShopByCategory;
