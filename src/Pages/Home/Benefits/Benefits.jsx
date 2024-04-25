import React from 'react';
import { FaRegMoneyBillAlt, FaRegUser   } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
const Benefits = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='border border-2 m-1  md:m-4 flex items-center'>
                <div className='text-4xl p-5'>
                    <FaRegMoneyBillAlt />
                </div>
                <div>
                    <h2 className='font-bold'>Money Return</h2>
                    <p className='text-gray-600'>Back Guarantee Under 7 Days</p>
                </div>
            </div>
            <div className='border border-2 m-1  md:m-4 flex items-center'>
                <div className='text-4xl p-5'>
                <FaRegUser />
                </div>
                <div>
                    <h2 className='font-bold'>Member Discount</h2>
                    <p className='text-gray-600'>On every order over $2000</p>
                </div>
            </div>
            <div className='border border-2 m-1  md:m-4 flex items-center'>
                <div className='text-4xl p-5'>
                <TbTruckDelivery />
                </div>
                <div>
                    <h2 className='font-bold'>Home Delivery</h2>
                    <p className='text-gray-600'>Free delivery to your home</p>
                </div>
            </div>
            <div className='border border-2 m-1  md:m-4 flex items-center'>
                <div className='text-4xl p-5'>
                <IoMdTime />
                </div>
                <div>
                    <h2 className='font-bold'>24/7 Support</h2>
                    <p className='text-gray-600'>Dedicated support in 24hrs</p>
                </div>
            </div>
        </div>
    );
};

export default Benefits;