import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../ShopByCatagory/ShopByCatagory.css'; 
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const ShopByCategory = () => {
    const [toys, setToys] = useState([]);
    const { user } = useContext(AuthContext);

    const handleClick = () => {
        if (!user) {
            Swal.fire("You have to log in first to view details");
        }
    }

    useEffect(() => {
        fetch('http://localhost:3000/toysBySubcategory')
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const renderTable = (subcategory) => (
        toys.filter(toy => toy.subcategory === subcategory).length === 0 ? (
            <p className='text-center font-semibold py-4 text-2xl md:text-4xl'>No Toy Found</p>
        ) : (
            <table className="table-auto w-full text-sm md:text-base">
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
                    {toys.filter(toy => toy.subcategory === subcategory).slice(0, 2).map(toy => (
                        <tr key={toy._id} className='text-center'>
                            <td><img src={toy.photo_url} alt={toy.toy_name} className="h-16 mx-auto" /></td>
                            <td>{toy.toy_name}</td>
                            <td>{toy.rating}</td>
                            <td>{toy.price}</td>
                            <td>
                                <Link to={`/alltoys/${toy._id}`}>
                                    <button
                                        className='btn font-bold ease-in-out hover:bg-black hover:text-white duration-1000 border-spacing-1 border-black'
                                        onClick={handleClick}
                                    >
                                        View Details
                                    </button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    );

    return (
        <div className="p-4 md:p-10">
            <h1 className="text-4xl md:text-6xl mb-8 font-bold text-center">Shop By Category</h1>
            <Tabs>
                <TabList className="flex flex-wrap justify-center mb-4">
                    <Tab className="px-4 py-2 cursor-pointer bg-gray-200 rounded-md m-2 hover:bg-gray-300" selectedClassName="react-tabs__tab--selected">Truck</Tab>
                    <Tab className="px-4 py-2 cursor-pointer bg-gray-200 rounded-md m-2 hover:bg-gray-300" selectedClassName="react-tabs__tab--selected">Sports Car</Tab>
                    <Tab className="px-4 py-2 cursor-pointer bg-gray-200 rounded-md m-2 hover:bg-gray-300" selectedClassName="react-tabs__tab--selected">Regular Car</Tab>
                    <Tab className="px-4 py-2 cursor-pointer bg-gray-200 rounded-md m-2 hover:bg-gray-300" selectedClassName="react-tabs__tab--selected">Mini Fire Truck</Tab>
                    <Tab className="px-4 py-2 cursor-pointer bg-gray-200 rounded-md m-2 hover:bg-gray-300" selectedClassName="react-tabs__tab--selected">Mini Police Car</Tab>
                </TabList>

                <TabPanel>{renderTable('Truck')}</TabPanel>
                <TabPanel>{renderTable('Sports Car')}</TabPanel>
                <TabPanel>{renderTable('Regular Car')}</TabPanel>
                <TabPanel>{renderTable('Mini Fire Truck')}</TabPanel>
                <TabPanel>{renderTable('Mini Police Car')}</TabPanel>
            </Tabs>
        </div>
    );
}

export default ShopByCategory;
