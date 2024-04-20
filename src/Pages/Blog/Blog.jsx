import React from 'react';
import useTitle from '../../Hooks/useTitle';

const Blog = ({ children }) => {
    useTitle('Blog');

    return (
        <div className="flex items-center justify-center">
            <div className="container mx-auto py-8 px-6">
                <h1 className="text-4xl md:text-7xl font-bold text-center mb-6">{children}</h1>
                <div className="accordion ml-6 text-left">

                    <div className="accordion-item">
                        <div className="accordion-title">
                            <h1 className="text-2xl md:text-5xl font-semibold mb-6">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                        </div>
                        <div className="accordion-content">
                            <p className="text-xl md:text-2xl font-semibold mb-6">Access tokens and refresh tokens are both components of the token-based authentication process used in many web and mobile applications. They serve different purposes and work together to authenticate users and authorize access to protected resources.</p>
                            <h2 className="text-xl md:text-3xl font-semibold my-6">1. Access Token:</h2>
                            <p className="text-lg md:text-xl font-semibold mb-6">- An access token is a credential used to access protected resources on behalf of the user. <br />
                            - It is typically short-lived, lasting only for a limited period of time, often ranging from minutes to hours. <br />
                            - Access tokens are issued by the authentication server (such as OAuth 2.0 server) after successful authentication and authorization of the user. <br />
                            - Once obtained, the access token is included in the request headers of API calls to authenticate the user and grant access to the requested resources. <br />
                            - Access tokens should be kept secure and not shared with unauthorized parties. <br />
                            - They are usually invalidated or expire after a predefined period to enhance security.</p>
                            <h2 className="text-xl md:text-3xl font-semibold my-6">2. Refresh Token:</h2>
                            <p className="text-lg md:text-xl font-semibold mb-6">- A refresh token is a credential used to obtain a new access token once the original access token expires. <br />
                            - Unlike access tokens, refresh tokens are long-lived and are typically valid for days, weeks, or even months. <br />
                            - Refresh tokens are used to mitigate the need for the user to re-authenticate every time the access token expires, thus providing a smoother user experience. <br />
                            - They are securely stored on the client-side and sent to the authentication server to request a new access token. <br />
                            - Refresh tokens are not included in API requests; instead, they are exchanged for a new access token through a separate token refresh request. <br />
                            - Refresh tokens should be securely managed to prevent unauthorized access, as they can be used to obtain new access tokens without requiring the user's credentials.
                            </p>
                            <h2 className="text-xl md:text-3xl font-semibold my-6">Where to Store on the Client-side:</h2>
                            <p className="text-lg md:text-xl font-semibold mb-6">
                            <span className='font-bold'>Access Tokens :</span> Access tokens should be stored securely on the client-side to prevent unauthorized access. They are typically stored in memory, such as in JavaScript variables or browser storage mechanisms like localStorage or sessionStorage. It's essential to use secure storage mechanisms and avoid storing sensitive tokens in places susceptible to cross-site scripting (XSS) attacks. <br />
                            <span className='font-bold'>Refresh Tokens : </span> Refresh tokens are more sensitive than access tokens since they have a longer lifespan and can be used to obtain new access tokens without the user's credentials. Therefore, they should be stored securely in a location that provides protection against theft or misuse. Commonly, refresh tokens are stored in HTTP-only secure cookies or in secure browser storage mechanisms. Storing them in cookies adds an extra layer of security by preventing client-side JavaScript code from accessing them, reducing the risk of XSS attacks.
                            </p>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <div className="accordion-title">
                            <h1 className="text-2xl md:text-5xl font-semibold mb-6">Compare SQL and NoSQL databases?</h1>
                        </div>
                        <div className="accordion-content">
                            <p className="text-xl md:text-2xl font-semibold mb-6">SQL (Structured Query Language) and NoSQL (Not Only SQL) databases are two different types of database management systems, each with its own characteristics and use cases. Here's a comparison between the two:</p>
                            <h2 className="text-xl md:text-3xl font-semibold my-6">1. Data Model:</h2>
                            <p className="text-lg md:text-xl font-semibold mb-6">
                                - SQL databases use a structured data model based on tables with rows and columns. Data is organized into predefined schemas, and each row in a table represents a record.
                                <br />
                                - NoSQL databases offer a more flexible data model. They can store unstructured, semi-structured, or structured data, and they typically use documents, key-value pairs, graphs, or wide-column stores to organize data.
                            </p>
                            <h2 className="text-xl md:text-3xl font-semibold my-6">2. Schema:</h2>
                            <p className="text-lg md:text-xl font-semibold mb-6">
                                - SQL databases enforce a rigid schema, where the structure of the data (table columns, data types, relationships) is defined upfront. Any changes to the schema may require altering existing data.
                                <br />
                                - NoSQL databases are schema-less or have a dynamic schema, allowing for more flexibility. New fields can be added to documents without affecting existing data, making it easier to accommodate evolving requirements.
                            </p>
                            <h2 className="text-xl md:text-3xl font-semibold my-6">3. Query Language:</h2>
                            <p className="text-lg md:text-xl font-semibold mb-6">
                                - SQL databases use SQL (Structured Query Language) for querying and manipulating data. SQL is a powerful language for performing complex queries, joins, aggregations, and transactions.
                                <br />
                                - NoSQL databases may have their own query languages, APIs, or interfaces tailored to the specific data model they support. While some NoSQL databases support SQL-like query languages, others provide APIs for CRUD operations.
                            </p>
                            <h2 className="text-xl md:text-3xl font-semibold my-6">4. Scalability:</h2>
                            <p className="text-lg md:text-xl font-semibold mb-6">
                                - SQL databases are traditionally designed for vertical scalability, meaning they scale by adding more resources (CPU, RAM) to a single server. This approach may have limitations in handling large volumes of data and high concurrency.
                                <br />
                                - NoSQL databases are designed for horizontal scalability, allowing them to distribute data across multiple nodes or servers. They can easily handle massive amounts of data and high throughput by adding more nodes to the cluster.
                            </p>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <div className="accordion-title">
                            <h1 className="text-2xl md:text-5xl font-semibold mb-6">What is express js? What is Nest JS?</h1>
                        </div>
                        <div className="accordion-content">
                            <p className="text-xl md:text-2xl font-semibold mb-6">
                                - Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications. It is widely used for building APIs, web servers, and web applications in Node.js. Express.js simplifies the process of handling HTTP requests, routing, middleware integration, and other common web development tasks, allowing developers to focus on building their applications.
                                <br />
                                - NestJS, on the other hand, is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. It is built with TypeScript and heavily inspired by Angular, making use of concepts like modules, controllers, services, and decorators. NestJS is designed to provide a more structured and organized approach to building Node.js applications, with strong support for TypeScript, dependency injection, middleware, and other features commonly found in enterprise-grade applications.
                            </p>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <div className="accordion-title">
                            <h1 className="text-2xl md:text-5xl font-semibold mb-6">What is MongoDB aggregate and how does it work?</h1>
                        </div>
                        <div className="accordion-content">
                            <p className="text-xl md:text-2xl font-semibold mb-6">MongoDB's aggregate function offers a versatile approach to analyzing and processing data within collections of documents. With its flexible pipeline-based architecture, MongoDB allows users to construct intricate data transformation workflows tailored to their specific needs. Each stage in the aggregation pipeline represents a distinct operation, from filtering and grouping to sorting and computing aggregate values. As documents progress through the pipeline, they undergo successive transformations, culminating in a refined output dataset that reflects the desired analytical results. This pipeline-centric approach enables users to perform complex data manipulations efficiently and intuitively, empowering them to extract valuable insights from their data with ease. By harnessing MongoDB's aggregate function, users can unlock the full potential of their data, facilitating informed decision-making and driving business growth.</p>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    );
};

export default Blog;
