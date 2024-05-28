import React, { useEffect } from 'react';
import { FaRegMoneyBillAlt, FaRegUser } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Benefits = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <>
            <div className='text-4xl md:text-6xl mb-8 font-bold text-center'>Benefits</div>
            <div className="divider"></div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 px-4'>
                <div className=' border-2 mx-auto my-2 md:mx-0 md:my-4 flex items-center p-4 rounded-lg' data-aos="fade-up" >
                    <div className='text-4xl p-2'>
                        <FaRegMoneyBillAlt />
                    </div>
                    <div>
                        <h2 className='font-bold text-xl md:text-2xl'>Money Return</h2>
                        <p className='text-gray-600'>Back Guarantee Under 7 Days</p>
                    </div>
                </div>
                <div className=' border-2 mx-auto my-2 md:mx-0 md:my-4 flex items-center p-4 rounded-lg' data-aos="fade-up" >
                    <div className='text-4xl p-2'>
                        <FaRegUser />
                    </div>
                    <div>
                        <h2 className='font-bold text-xl md:text-2xl'>Member Discount</h2>
                        <p className='text-gray-600'>On every order over $2000</p>
                    </div>
                </div>
                <div className=' border-2 mx-auto my-2 md:mx-0 md:my-4 flex items-center p-4 rounded-lg' data-aos="fade-up" >
                    <div className='text-4xl p-2'>
                        <TbTruckDelivery />
                    </div>
                    <div>
                        <h2 className='font-bold text-xl md:text-2xl'>Home Delivery</h2>
                        <p className='text-gray-600'>Free delivery to your home</p>
                    </div>
                </div>
                <div className=' border-2 mx-auto my-2 md:mx-0 md:my-4 flex items-center p-4 rounded-lg' data-aos="fade-up" >
                    <div className='text-4xl p-2'>
                        <IoMdTime />
                    </div>
                    <div>
                        <h2 className='font-bold text-xl md:text-2xl'>24/7 Support</h2>
                        <p className='text-gray-600'>Dedicated support in 24hrs</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Benefits;
