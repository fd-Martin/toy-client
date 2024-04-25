import React from 'react';
import Marquee from "react-fast-marquee";
import brand1 from "../../../assets/brand-1.svg"
import brand2 from "../../../assets/brand-2.svg"
import brand3 from "../../../assets/brand-3.svg"
import brand4 from "../../../assets/brand-4.svg"
import brand5 from "../../../assets/brand-5.svg"
import brand6 from "../../../assets/brand-6.svg"
import brand7 from "../../../assets/brand-7.svg"
import "./MarqueeSection.css";
import { ImFire } from "react-icons/im";

const MarqueeSection = () => {
    return (
        <>
            <Marquee className='bg-emerald-400' speed={120} pauseOnHover={true}>
                <div className=' h-12 flex items-center text-white mx-4'>
                    <ImFire /> <p className='mx-4 font-bold '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quisquam deleniti explicabo.</p>
                </div>
                <div className=' h-12 flex items-center text-white mx-4'>
                    <ImFire /> <p className='mx-4 font-bold '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quisquam deleniti explicabo.</p>
                </div>
                <div className=' h-12 flex items-center text-white mx-4'>
                    <ImFire /> <p className='mx-4 font-bold '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quisquam deleniti explicabo.</p>
                </div>
                <div className=' h-12 flex items-center text-white mx-4'>
                    <ImFire /> <p className='mx-4 font-bold '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quisquam deleniti explicabo.</p>
                </div>
                <div className=' h-12 flex items-center text-white mx-4'>
                    <ImFire /> <p className='mx-4 font-bold '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quisquam deleniti explicabo.</p>
                </div>
            </Marquee>
            <Marquee pauseOnHover={true} >
                <div className='flex justify-around py-8'>
                    <div className='px-8'>
                        <img src={brand1} alt="" className="brand-img" />
                    </div>
                    <div className='px-8'>
                        <img src={brand2} alt="" className="brand-img" />
                    </div>
                    <div className='px-8'>
                        <img src={brand3} alt="" className="brand-img" />
                    </div>
                    <div className='px-8'>
                        <img src={brand4} alt="" className="brand-img" />
                    </div>
                    <div className='px-8'>
                        <img src={brand5} alt="" className="brand-img" />
                    </div>
                    <div className='px-8'>
                        <img src={brand6} alt="" className="brand-img" />
                    </div>
                    <div className='px-8'>
                        <img src={brand7} alt="" className="brand-img" />
                    </div>
                </div>
            </Marquee>
        </>
    );
};

export default MarqueeSection;
