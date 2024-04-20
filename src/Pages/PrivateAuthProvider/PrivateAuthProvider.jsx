import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateAuthProvider = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <>
            <div className=' mx-auto h-96 flex justify-center'>
                <span className="loading loading-infinity loading-lg"></span>
            </div>
        </>
    }

    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} to="/login" replace></Navigate>;

};

export default PrivateAuthProvider;