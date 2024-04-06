import React from 'react';

const Blog = ({ children }) => {
    return (
        <div className=" flex items-center justify-center">
            <div className="container mx-auto py-8 px-6">
                <h1 className="text-5xl font-bold text-center mb-6"> {children}</h1>
                <div className="accordion ml-6">

                    <div className="accordion-item">
                        <div className="accordion-title">
                            <h1 className="text-3xl font-semibold mb-6">What is an access token and refresh token? How do they work and where should we store them on the client-side ?</h1>
                        </div>
                        <div className="accordion-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <div className="accordion-title">
                            <h1 className="text-3xl font-semibold mb-6">Compare SQL and NoSQL databases ?</h1>
                        </div>
                        <div className="accordion-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <div className="accordion-title">
                            <h1 className="text-3xl font-semibold mb-6">What is express js? What is Nest JS ?</h1>
                        </div>
                        <div className="accordion-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <div className="accordion-title">
                            <h1 className="text-3xl font-semibold mb-6">What is MongoDB aggregate and how does it work ?</h1>
                        </div>
                        <div className="accordion-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
