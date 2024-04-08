import React, { useState, useEffect } from 'react';
import './Bannar.css';

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevIndex) => (prevIndex === 3 ? 0 : prevIndex + 1));
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, []);

    const slidesContent = [
        {
            image: "https://images.unsplash.com/photo-1598084991519-c90900bc9df0?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Zoom into Adventure with the Turbo Speedster!",
            description: "Get ready to zoom into adventure with our Turbo Speedster! Perfect for high-speed racing and thrilling adventures.",
        },
        {
            image: "https://images.unsplash.com/photo-1626023772800-eadff10c0f9a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Off-Road Excitement: Conquer Any Terrain with the All-Terrain Racer!",
            description: "Take on any terrain with our All-Terrain Racer! Whether it's rugged mountains or muddy tracks, this car is ready for action.",
        },
        {
            image: "https://images.unsplash.com/photo-1531693251400-38df35776dc7?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "City Cruisin' with the Urban Speedster: Explore Every Street!",
            description: "Explore the city streets in style with our Urban Speedster! Perfect for cruising around town and discovering new adventures.",
        },
        {
            image: "https://images.unsplash.com/photo-1515281239448-2abe329fe5e5?q=80&w=1193&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "High-Octane Thrills Await with the Supercharged Dragster!",
            description: "Experience high-octane thrills with our Supercharged Dragster! Perfect for adrenaline junkies and speed enthusiasts.",
        },
    ];

    return (
        <div className="relative">
            <div className="carousel w-full relative overflow-hidden">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    {slidesContent.map((slide, index) => (
                        <div key={index} className="carousel-item w-full relative">
                            <img src={slide.image} className="w-full" alt={`Slide ${index + 1}`} />
                            <div className="absolute inset-0 flex items-center justify-center z-10 gradient-bg">
                                <div className="text-white text-lg font-bold p-8 m-4">
                                    <h1 className='text-center text-2xl md:text-6xl'>{slide.title}</h1>
                                    <p className='text-center text-sm md:text-xl mt-5'>{slide.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 flex justify-center w-full py-2 gap-2">
                {slidesContent.map((_, index) => (
                    <button
                        key={index}
                        className={`btn btn-xs ${currentSlide === index ? 'bg-gray-800' : ''}`}
                        onClick={() => goToSlide(index)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Banner;
